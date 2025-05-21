const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register new user
exports.register = async (req, res) => {
  const { fullname, username, password, gender } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ msg: 'Username already taken' });
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      username,
      password: hashedPwd,
      gender,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        gender: newUser.gender,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
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
