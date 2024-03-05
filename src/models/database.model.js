const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema(
  {
    'Product Description': {
      type: String,
      required: true,
    },
    'CBSA HS Code': {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const HSMapping = mongoose.model('hscode_mapping', userSchema, 'hscode_mapping');
module.exports = { HSMapping };
