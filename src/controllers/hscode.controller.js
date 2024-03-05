const { HSMapping } = require('../models/database.model');

exports.getAllHsCodes = async (req, res) => {
  try {
    const list = await HSMapping.find();
    res.json(list);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Something went wrong', error: error.message });
  }
};
