const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
    content : String
}, {
    timestamps : true
});

const bookmarks = mongoose.model('Bookmarks', bookmarkSchema);

module.exports = { bookmarkSchema, bookmarks };