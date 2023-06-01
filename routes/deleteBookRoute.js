const express = require("express");
const router = express.Router();

const { deleteBook } = require("../controller/deleteBook");


router.delete("/books/:id", deleteBook);

module.exports = router;
