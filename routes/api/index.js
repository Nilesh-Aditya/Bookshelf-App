const express = require('express');
const route = express.Router();

route.use('/login', require('./login'));
route.use('/register', require('./register'));
route.use('/books', require('./books'));

module.exports = route;
