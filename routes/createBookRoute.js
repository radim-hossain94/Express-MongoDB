const express = require("express");
const router = express.Router();

const { createBook } = require("../controller/createBook");


router.post("/books", createBook);


module.exports = router;
