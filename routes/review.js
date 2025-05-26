const express = require('express');
const { addReview, updateReview, deleteReview } = require('../controllers/review.controller');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.post('/books/:id', authenticate, addReview);
router.put('/:id', authenticate, updateReview);
router.delete('/:id', authenticate, deleteReview);


module.exports = router;