const mongoose = require('mongoose');
const { bookmarkSchema } = require('./bookmarks');
const { bookSchema } = require('./books');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    user_id: String,
    books: [ bookSchema ],
    bookmarks: [ bookmarkSchema ]
},{
    timestamps : true
});


module.exports = mongoose.model('User', userSchema);