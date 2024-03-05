const mongoose = require('mongoose');
const { creatJwtToken } = require('../core/jwthandler');
const { User } = require('../models/users.model');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error('Email id and Password required');

    const user = await User.findOne({ email });
    if (user) throw new Error('User already registered with provided email');

    const userData = await User.create(req.body);
    if (!userData) throw new Error('Something went wrong, while creating user');

    // Creating JWT Token
    const data = {
      email,
    };

    const token = creatJwtToken(data);
    const updatedData = await User.findOneAndUpdate(
      userData._id,
      {
        $set: {
          accessToken: token,
        },
      },
      { new: true, projection: { password: 0 } }
    );
    res.json(updatedData);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Something went wrong', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error('Email id and Password required');

    const user = await User.findOne({ email }, {}, { lean: true });
    if (!user) throw new Error('User does not exist');

    const isMatched = await comparePassword(password, user.password);
    if (!isMatched) throw new Error('Incorrect email or password');

    // Creating JWT Token
    const data = {
      email,
    };

    const token = creatJwtToken(data);
    const updatedData = await User.findOneAndUpdate(
      user._id,
      {
        $set: {
          accessToken: token,
        },
      },
      { new: true, projection: { password: 0 } }
    );

    res.json(updatedData);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Something went wrong', error: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);

    if (!user) throw new Error('user not exist');

    await user.updateOne({ $unset: { accessToken: 1 } });

    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error(error);
    res.json({ message: 'Something went wrong', error: error.message });
  }
};

const comparePassword = async (password, userPassword) => {
  return await bcrypt.compare(password, userPassword);
};
