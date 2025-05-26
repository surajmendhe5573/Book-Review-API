const mongoose= require('mongoose');

const bookSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Review'
    }]
});

module.exports= mongoose.model('Book', bookSchema);