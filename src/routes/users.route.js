const express = require("express");
const { register, login } = require("../controllers/users.controller");
const userRoute = express.Router();

userRoute.post("/login", login);
userRoute.post("/register", register);

module.exports = userRoute;
