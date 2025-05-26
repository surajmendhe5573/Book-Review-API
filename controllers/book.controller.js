const Book= require('../models/book.model');

const addBook= async(req, res)=>{
    try {
        const {title, author, genre}= req.body;

        const newBook= new Book({
            title,
            author,
            genre
        });

        await newBook.save();
        res.status(200).json({message: 'Book added successfully', book:newBook});
        
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
};

const getBook= async(req, res)=>{
    try {
        const {author, genre, page = 1, limit = 10 } = req.query;
        const filter= {};
        if (author) filter.author = new RegExp(author, 'i');
        if (genre) filter.genre = new RegExp(genre, 'i');

        const books= await Book.find(filter)
            .skip((page - 1) * limit)
            .limit(Number(limit));
            res.status(200).json(books);
        
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
};

const getBookById= async(req, res)=>{
    try {
        const book= await Book.findById(req.params.id).populate('reviews');

        if(!book){
            return res.status(404).json({message: 'Book not found'});
        }

        res.status(200).json({message: 'Book fetched successfully', book});
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
};

const searchBook = async (req, res) => {
    try {
        const {query} = req.query;

        if (!query) {
            return res.status(400).json({ message: 'Search query is required' });
        }

        const books = await Book.find({
            $or: [
                { title: new RegExp(query, 'i') },
                { author: new RegExp(query, 'i') },
            ],
        });

        if (books.length === 0) {
            return res.status(404).json({ message: 'No books found matching the query' });
        }

        res.status(200).json({ message: 'Books retrieved successfully', books });
    } catch (error) {
        console.log(error);
        console.error('SearchBook Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports= {addBook, getBook, getBookById, searchBook};