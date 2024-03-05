/* Importing dotenv for environment variables */
const dotenv = require("dotenv");
// import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

/* Importing main express application */
const connectDb = require("./db/index");
// import connectDb from "./db";
const app = require("./app");
// import app from "./app";
const { PORT } = require("./config/index");
// import { PORT } from "./config";

/* Connecting Database */
connectDb()
  .then(async () => {
    /* Starting app on env port when database connected successfully */
    app.listen(PORT, () => {
      console.info(`server running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed");
    console.error(error);
  });
