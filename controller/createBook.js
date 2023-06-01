const Book = require('../model/book.js');

exports.createBook = async(req, res) =>{
    try{
        const {title, author, description, publishedYear} = req.body;

        if(!title){
            res.status(401).json({
                error: "Book title is missing"
            });
        }
        if(!author) {
          res.status(401).json({
            error: "Book author is missing",
          });
        }

        const existingBook = await Book.findOne({ title });
        if(existingBook){
            res.status(403).json({
                error: "Book already exists"
            })
        }

        const book = await new Book({
            title,
            author,
            description,
            publishedYear
        }).save();

        res.status(200).json({
            book: {
                title: book.title,
                author: book.author,
                description: book.description,
                publishedYear: book.publishedYear

            }
        })

    }catch(err){
        console.log(err);
    }
}