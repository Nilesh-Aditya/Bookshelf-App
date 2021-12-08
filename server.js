const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./data/db');

const app = express();
connectDB();

app.use(express.static('client/public'));
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));


app.get('/', (req, res) => {
    res.send( '<p>Hello, Welcome to the Server</p>' );
})

app.use('/api', require('./routes/api'));