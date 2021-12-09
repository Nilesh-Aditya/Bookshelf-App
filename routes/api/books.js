const express = require('express');
const { Books } = require('../../models/books');

const route = express.Router();

// get all the books
route.get('/', async (req, res) => {
    try {
        let books = await Books.find({});
        
        return res.status(200).json(books);

    } catch (error) {
        console.error(error);
        res.status(400).json({error: error});
    }
})

// get specific book (by name)

route.get('/:name', async(req, res) => {
    try {
        let book = await Books.findOne({ name : req.params.name });
        
        return res.status(200).json(book);
    } catch (error) {
        console.error(error);
        res.status(400).json({error: error});
    }
})


module.exports = route;