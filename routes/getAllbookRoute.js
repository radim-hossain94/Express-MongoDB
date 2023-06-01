const express = require("express");
const router = express.Router();

const { createBook } = require("../controller/createBook");
const { getAllBook } = require("../controller/getAllbook");
const { getSingleBook } = require("../controller/getSingleBook");
const { updateBook } = require("../controller/updateBook");
const { deleteBook } = require("../controller/deleteBook");

router.post("/books", createBook);
router.get("/books", getAllBook);
router.get("/books/:id", getSingleBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
