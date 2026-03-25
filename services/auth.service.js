const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET = 'nahikahunga';

async function loginUser(email , password){
    try {
        let user = await User.findOne({ Email : email });

        if(!user) {
            const lastUser = await User.findOne().sort({ UserID : -1 });
            const newUserID = lastUser ? lastUser.UserID + 1 : 1;
            const hashedPassword = await bcrypt.hash(password, 10);

            user = await User.create({
                UserID : newUserID,
                Email : email,
                Password : hashedPassword,
                Role : 'operator'
            });

            const token = jwt.sign(
                { id : user._id, role : user.Role },
                SECRET,
                { expiresIn : '2m' }
            );

            return {
                success : true,
                token,
                message : 'Registration successful, token generated'
            };
        }

        const isBcryptHash = typeof user.Password === 'string' && user.Password.startsWith('$2');
        const isPasswordValid = isBcryptHash ? await bcrypt.compare(password, user.Password) : user.Password === password;

        if(!isPasswordValid){
            return {
                success : false,
                message : 'Username or password invalid'
            };
        }

        if (!isBcryptHash) {
            const rehashedPassword = await bcrypt.hash(password, 10);
            await User.findByIdAndUpdate(user._id, { Password: rehashedPassword });
        }

        const token = jwt.sign(
            { id : user._id, role : user.Role },
            SECRET,
            { expiresIn : '2m' }
        );

        return {
            success : true,
            token,
            message : 'Login successful'
        };
    } catch (error) {
        return {
            success : false,
            message : error.message
        };
    }
}

module.exports = {loginUser}