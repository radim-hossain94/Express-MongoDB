const Book = require("../model/book.js");

exports.getSingleBook = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id });
    //console.log(req.params.id);
    if (book) {
      res.status(200).json({
        book,
      });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve book" });
  }
};