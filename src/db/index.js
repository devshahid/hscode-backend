// import mongoose from "mongoose";
const mongoose = require("mongoose");
// import { DB_KEYS } from "../config";
const { DB_KEYS } = require("../config/index");
const connectDb = async () => {
  try {
    const DB = DB_KEYS.DB_URI + DB_KEYS.DB_NAME;
    const dbInstance = await mongoose.connect(DB);
    console.info("DATABASE CONNECTED!!");
    console.info(`DB HOSTNAME: ${dbInstance.connection.host}`);
  } catch (error) {
    console.error(`MONGODB CONNECTION FAILED : ${error}`);
    process.exit(1);
  }
};

module.exports = connectDb;
