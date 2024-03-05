const express = require('express');
const { register, login, logout } = require('../controllers/users.controller');
const { userAccess } = require('../middleware/auth.middleware');
const userRoute = express.Router();

userRoute.post('/login', login);
userRoute.post('/register', register);
userRoute.post('/logout', logout);

module.exports = userRoute;
