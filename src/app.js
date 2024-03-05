const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const routes = require("./routes/index");

// Apply parser middleware to parse data in json and url form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply cors and helmet middlewares
app.use(cors());
app.use(helmet());

// unprotected route for health check
app.get("/v1/healthCheck", (req, res) => res.send("Server up and running"));

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.originalUrl}`);
  if (req.body) console.log("Request Body:", req.body); // Logs request body
  if (req.params) console.log("Request Parameters:", req.params); // Logs request body
  if (req.query) console.log("Request Query:", req.query); // Logs request body
  next();
});

app.use("/v1", routes);

module.exports = app;
