const express = require('express');
const routes = express.Router();
const userRotue = require('./users.route');
const hscodeRoute = require('./hscode.route');

routes.use('/user', userRotue);
routes.use('/hscode', hscodeRoute);

module.exports = routes;
