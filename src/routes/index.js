const express = require("express");
const routes = express.Router();
const userRotue = require("./users.route");

routes.use("/user", userRotue);

module.exports = routes;
