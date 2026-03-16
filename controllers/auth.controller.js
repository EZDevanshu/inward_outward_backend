const {loginUser} = require('../services/auth.service');

async function login(req , res){
    const {email , password} = req.body;

    const result = await loginUser(email , password);

    if(!result.success){
        return res.status(401).json(result);
    }

    return res.status(200).json({
        success : true,
        message : "Login successful",
        token : result.token,
    })
}

module.exports = {login};