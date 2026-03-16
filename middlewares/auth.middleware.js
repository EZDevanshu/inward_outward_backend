const jwt = require('jsonwebtoken');
const SECRET = 'nahikahunga';

function verifyToken(req , res , next){
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

    if(!token){
        return res.status(403).json({message : "Token required"})
    }

    try{
        const decode = jwt.verify(token, SECRET);

        req.user = decode;

        next();
    }
    catch{
        return res.status(401).json({message : "invalid token"})
    }
}

module.exports = verifyToken;