const jwt = require('jsonwebtoken');
const { userAuth: User } = require('../models/login');

const requireAuth = async (req, res, next) => {
    const token = verifyUser();
    try {
        if (token) {
            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    console.log(err.message)
                    return res.status(400).json({error : err});
                } else {
                    console.log(decoded);
                }
            })
        }
        
        next();

    } catch (error) {
        console.error(error);
        return res.status(400).json({error});
    }
};

const userID = async (req, res, next) => {
    const token = verifyUser();
    try {
        if(token){
            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if(err){
                    console.log(err.message);
                    return res.status(400).json({error : err});
                }
                else{
                    console.log(decoded.id);
                    req.user_id = decoded.id;
                }
            })
        }

        next();
        
    } catch (error) {
        console.error(error);
        return res.status(400).json({error});
    }
}

const verifyUser = () => {
    const token = req.cookies.jwt;
    return token;
}

module.exports = { userID, requireAuth, verifyUser };