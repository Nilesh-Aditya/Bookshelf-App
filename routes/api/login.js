const express = require('express');
const User = require('../../models/login');
const UserData = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const route = express.Router();


route.get('/', (req, res) => { 
    res.render('login', { title: "login" , style : 'login', errors : []});
});

route.post('/',express.json(), async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const user = await User.findOne({ email });
        const name = user.name;
        const identity = user._id;
        const checkUser = await UserData.findOne({ user_id : identity });
        if(!checkUser){
            const new_user = await UserData.create({
                user_id: identity,
                books: [],
                bookmarks: []
            });
        }

        if (user) {
            const auth = await bcrypt.compare(password, user.password);
            if (!auth) {
                throw ({password: 'Incorrect password'});
            }
        }
        else {
            const obj = { email: 'incorrect Email-Id and password' };
            throw obj;
        }
        const id = user._id;
        const maxAge = 3 * 24 * 60 * 60;
        const token = jwt.sign({ id }, process.env.SECRET_KEY, {
            expiresIn: maxAge
        });
        
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000, sameSite:'lax' });
        return res.status(201).json({user:"Login Success"});

    } catch (err) {
        console.log(err);
        res.status(400).json({ errors: err });
    }
});

module.exports = route;