const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register new user
exports.register = async (req, res) => {
  const { fullname, username, password, gender } = req.body;

  try {
    // Check if user exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ msg: 'Username already taken' });
    }

    // Hash password
    const hashedPwd = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      fullname,
      username,
      password: hashedPwd,
      gender,
    });

    // Save user
    const savedUser = await newUser.save();

    // Verify JWT_SECRET is available
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined');
      throw new Error('Server configuration error');
    }

    // Generate token
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    // Prepare response data
    const userData = {
      id: savedUser._id,
      fullname: savedUser.fullname,
      username: savedUser.username,
      gender: savedUser.gender,
    };

    // Send success response
    return res.status(201).json({
      success: true,
      message: 'Registration successful',
      token,
      user: userData
    });

  } catch (err) {
    console.error('Registration error:', err);
    
    // Handle specific errors
    if (err.message.includes('JWT_SECRET')) {
      return res.status(500).json({ 
        success: false,
        msg: 'Server configuration error' 
      });
    }
    
    return res.status(500).json({ 
      success: false,
      msg: 'Registration failed',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};
// Login user
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        fullname: user.fullname,
        username: user.username,
        gender: user.gender,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
