const express = require('express');
const route = express.Router();

route.use('/login', require('./login'));
route.use('/register', require('./register'));

module.exports = route;
