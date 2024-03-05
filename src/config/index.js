const DB_KEYS = {
  DB_URI: process.env.DB_URI,
  DB_NAME: process.env.DB_NAME,
};
const PORT = process.env.PORT || 8000;
const JWT_KEY = process.env.JWT_KEY;

module.exports = { DB_KEYS, PORT, JWT_KEY };
