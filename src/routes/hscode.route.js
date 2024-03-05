const express = require('express');
const hscodeRoute = express.Router();
const { getAllHsCodes } = require('../controllers/hscode.controller');

hscodeRoute.get('/getHsCode', getAllHsCodes);

module.exports = hscodeRoute;
