const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Validation helper
const validateRegistration = (data) => {
  const errors = [];
  
  if (!data.fullname || data.fullname.trim().length < 2) {
    errors.push('Full name must be at least 2 characters long');
  }
  
  if (!data.username || data.username.trim().length < 3) {
    errors.push('Username must be at least 3 characters long');
  }
  
  if (!data.password || data.password.length < 6) {
    errors.push('Password must be at least 6 characters long');
  }
  
  if (!data.gender || !['male', 'female', 'other'].includes(data.gender)) {
    errors.push('Gender must be male, female, or other');
  }
  
  return errors;
};

const validateLogin = (data) => {
  const errors = [];
  
  if (!data.username || data.username.trim().length === 0) {
    errors.push('Username is required');
  }
  
  if (!data.password || data.password.length === 0) {
    errors.push('Password is required');
  }
  
  return errors;
};

// Register new user
exports.register = async (req, res) => {
  try {
    const { fullname, username, password, gender } = req.body;
    
    // Validate input
    const validationErrors = validateRegistration(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        msg: 'Validation failed',
        errors: validationErrors
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ 
      username: username.trim().toLowerCase() 
    });
    
    if (existingUser) {
      return res.status(400).json({
        success: false,
        msg: 'Username already taken'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new User({
      fullname: fullname.trim(),
      username: username.trim().toLowerCase(),
      password: hashedPassword,
      gender: gender.toLowerCase(),
    });

    // Save user
    const savedUser = await newUser.save();

    // Verify JWT_SECRET is available
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined');
      return res.status(500).json({
        success: false,
        msg: 'Server configuration error'
      });
    }

    // Generate token
    const token = jwt.sign(
      { 
        id: savedUser._id,
        username: savedUser.username 
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Prepare response data (exclude password)
    const userData = {
      id: savedUser._id,
      fullname: savedUser.fullname,
      username: savedUser.username,
      gender: savedUser.gender,
      createdAt: savedUser.createdAt
    };

    // Send success response
    return res.status(201).json({
      success: true,
      message: 'Registration successful',
      token,
      user: userData
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    // Handle MongoDB duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        msg: 'Username already exists'
      });
    }
    
    // Handle validation errors from Mongoose
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        msg: 'Validation failed',
        errors: validationErrors
      });
    }

    return res.status(500).json({
      success: false,
      msg: 'Registration failed. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    const validationErrors = validateLogin(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        msg: 'Validation failed',
        errors: validationErrors
      });
    }

    // Find user
    const user = await User.findOne({ 
      username: username.trim().toLowerCase() 
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: 'Invalid credentials'
      });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        msg: 'Invalid credentials'
      });
    }

    // Verify JWT_SECRET is available
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined');
      return res.status(500).json({
        success: false,
        msg: 'Server configuration error'
      });
    }

    // Generate token
    const token = jwt.sign(
      { 
        id: user._id,
        username: user.username 
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Prepare response data (exclude password)
    const userData = {
      id: user._id,
      fullname: user.fullname,
      username: user.username,
      gender: user.gender,
      createdAt: user.createdAt
    };

    // Update last login (optional)
    await User.findByIdAndUpdate(user._id, { lastLogin: new Date() });

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: userData
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      msg: 'Login failed. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Get current user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        msg: 'User not found'
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        fullname: user.fullname,
        username: user.username,
        gender: user.gender,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin
      }
    });

  } catch (error) {
    console.error('Get profile error:', error);
    return res.status(500).json({
      success: false,
      msg: 'Failed to get profile',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const { fullname, gender } = req.body;
    const userId = req.user.id;

    // Validate input
    const updates = {};
    if (fullname && fullname.trim().length >= 2) {
      updates.fullname = fullname.trim();
    }
    if (gender && ['male', 'female', 'other'].includes(gender.toLowerCase())) {
      updates.gender = gender.toLowerCase();
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        msg: 'No valid updates provided'
      });
    }

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updates,
      { new: true, runValidators: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        msg: 'User not found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        id: updatedUser._id,
        fullname: updatedUser.fullname,
        username: updatedUser.username,
        gender: updatedUser.gender,
        createdAt: updatedUser.createdAt,
        lastLogin: updatedUser.lastLogin
      }
    });

  } catch (error) {
    console.error('Update profile error:', error);
    return res.status(500).json({
      success: false,
      msg: 'Failed to update profile',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};