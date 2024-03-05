const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/index");
exports.creatJwtToken = (data) => {
  try {
    return jwt.sign(data, JWT_KEY);
  } catch (error) {
    console.error("############### Error: createJwtToken ###############");
    console.error(error);
    throw new Error("Error: createJwtToken");
  }
};

exports.verifyJwtToken = (token) => {
  try {
    return jwt.verify(token, JWT_KEY);
  } catch (error) {
    console.error("########## Error: JWT.verify ########### ");
    console.error(error);
    throw new Error("Error: accesstoken mismatch");
  }
};
