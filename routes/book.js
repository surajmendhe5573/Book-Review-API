const express = require('express');
const {addBook, getBook, getBookById, searchBook} = require('../controllers/book.controller');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.post('/', authenticate, addBook);
router.get('/', getBook);
router.get('/search', searchBook);
router.get('/:id', getBookById);


module.exports = router;
