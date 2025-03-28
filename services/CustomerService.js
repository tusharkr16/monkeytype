const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/Customer.js');


const registerUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  return user.save();
};


const findUserByUsername = async (username) => {
  return User.findOne({ username });
};




const comparePassword = async (inputPassword, storedPassword) => {
  return bcrypt.compare(inputPassword, storedPassword);
};


const generateToken = (userId) => {
  return jwt.sign({ userId }, "tusharkumar9871", { expiresIn: '7h' });
};

module.exports = {
  registerUser,
  findUserByUsername,
  comparePassword,
  generateToken,
};
