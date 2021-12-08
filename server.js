const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./data/db');
const path = require('path');

const app = express();
connectDB();

app.use(express.static('client/public'));
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use('/api', require('./routes/api'));

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


app.get('/', (req, res) => {
    res.send( '<p>Hello, Welcome to the Server</p>' );
})