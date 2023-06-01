const express = require("express");
const router = express.Router();


const { updateBook } = require("../controller/updateBook");



router.put("/books/:id", updateBook);


module.exports = router;
