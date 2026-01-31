const mongoose = require('mongoose')

const connectionDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://devanshup211:Dp2112006@mycluster.btuvm0z.mongodb.net/inward-outward-db");
        console.log("db connet")
    }catch(error){
        console.log("Db conncetion error : " ,  error)
    }
}

module.exports = connectionDB