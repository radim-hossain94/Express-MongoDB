const Book = require("../model/book.js");

exports.getAllBook = async (req, res) => {
  try {
    let books = await Book.find();
    res.status(200).json({
      books,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve books" });
  }
};
