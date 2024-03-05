const { HSMapping } = require('../models/database.model');

exports.getAllHsCodes = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Current page number, default is 1
  const limit = parseInt(req.query.limit) || 10; // Number of documents per page, default is 10

  try {
    const totalCount = await HSMapping.countDocuments();
    const totalPages = Math.ceil(totalCount / limit);

    const list = await HSMapping.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      data: list,
      currentPage: page,
      totalPages: totalPages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};
