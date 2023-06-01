const Book = require("../model/book.js");

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    
    if (book) {
      res.json({ message: "Book updated successfully", book });
    } else {
      res.status(404).json({ error: "No book found to update" });
    }
  } catch (error) {
    res.status(400).json({ error: "Failed to update the book" });
  }
};