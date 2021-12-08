const mongoose = require('mongoose');
const { bookmarkSchema } = require('./bookmarks');

const bookSchema = new mongoose.Schema({
    name : String,
    desciption : String,
    tags : [String],
    rating : Number,
    contents: {
        type: String,
    }
}, {
    timestamps : true
});


const Books = mongoose.model('Books', bookSchema);

module.exports = {
    Books,
    bookSchema
}