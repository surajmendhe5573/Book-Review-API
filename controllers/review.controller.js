const Review = require('../models/review.model');
const Book = require('../models/book.model');

const addReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;

        const existingReview = await Review.findOne({
            user: req.user.id,
            book: req.params.id,
        });

        if (existingReview) {
            return res.status(400).json({ message: 'You have already reviewed this book' });
        }

        const review = new Review({
            user: req.user.id,
            book: req.params.id,
            rating,
            comment,
        });

        await review.save();
        await Book.findByIdAndUpdate(req.params.id, { $push: { reviews: review._id } });

        res.status(201).json({ message: 'Review added successfully', review });
    } catch (err) {
        console.error('Error adding review:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
const updateReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;

        const review = await Review.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            { rating, comment },
            { new: true }
        );

        if (!review) {
            return res.status(404).json({ message: 'Review not found or not owned by the user' });
        }

        res.status(200).json({ message: 'Review updated successfully', review });
    } catch (err) {
        console.error('Error updating review:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteReview = async (req, res) => {
    try {
        const review = await Review.findOneAndDelete({ _id: req.params.id, user: req.user.id });

        if (!review) {
            return res.status(404).json({ message: 'Review not found or not owned by the user' });
        }

        await Book.findByIdAndUpdate(review.book, { $pull: { reviews: review._id } });

        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (err) {
        console.error('Error deleting review:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports= {addReview, updateReview, deleteReview};