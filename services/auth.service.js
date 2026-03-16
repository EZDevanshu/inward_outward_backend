const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const SECRET = 'nahikahunga';

async function loginUser(email , password){
    const user = await User.findOne({ Email : email});

    if(!user) {
        return {
            success : false,
            message : "Username of Passwrod invalid"
        }
    }

    if(user.Password !== password){
        return{
            success : false,
            message : "username or Password invalid"
        }
    }

    const token = jwt.sign(
        {id : user._id , role : user.Role} ,
        SECRET , 
        {expiresIn : "1h"}
    );

    return{
        success : true ,
        token ,
    }
}

module.exports = {loginUser}