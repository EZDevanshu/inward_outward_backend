const mongoose = require('mongoose')

const connectionDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("db connet")
    }catch(error){
        console.log("Db conncetion error : " ,  error)
    }
}

module.exports = connectionDB