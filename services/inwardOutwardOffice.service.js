const inwardOutwardOfficeModel = require("../models/inwardOutwardOffice.model")

async function getAllInwardOutwardOffice(){
    const data = await inwardOutwardOfficeModel.find();
    if(data){
        return{
            error : false , 
            data ,
            message : "data fatched inwardOutwardOfficeMiddleware in get all data successful "
        }
    }
    else {
        return {
            error : true , 
            message : "some error occured in inwardOutwardOfficeMiddleware in get all data"
        }
    }
}

async function getByIDInwardOutwardOffice(id) {
    try {
        const data = await inwardOutwardOfficeModel.findById(id);
        if(data){
            return{
                error : false ,
                data ,
                message : "getByIDInwardOutwardOffice successful" ,
            }
        }
        else {
            return {
                error : true ,
                message : "record not found" ,
            }
        }
    }
    catch(err){
        return {
            error : true , 
            message : err.message ,
        }
    }
}

async function insertInwardOutwardOffice(payload){
    try{
        const data = await inwardOutwardOfficeModel.create(payload);
        return{
            error : false ,
            data ,
            message : "InwardOutwardOffice inserted successfully"
        };
    } 
    catch(err){
        return{
            error : true,
            message : err.message
        };
    }
}

async function updateInwardOutwardOffice(){
    
}

async function deleteInwardOutwardOffice(){
    
}
module.exports = {getAllInwardOutwardOffice , getByIDInwardOutwardOffice , insertInwardOutwardOffice ,}