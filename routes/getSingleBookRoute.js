const express = require("express");
const router = express.Router();


const { getSingleBook } = require("../controller/getSingleBook");



router.get("/books/:id", getSingleBook);


module.exports = router;
