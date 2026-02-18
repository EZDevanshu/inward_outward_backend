const inwardOutwardOfficeModel = require("../models/inwardOutwardOffice.model")

async function getAllInwardOutwardOffice(){
    try{
        const data = await inwardOutwardOfficeModel.find();
        if(data){
            return{
                error : false , 
                data ,
                message : "data fatched inwardOutwardOffice in get all data successful "
            }
        }
        else {
            return {
                error : true , 
                message : "some error occured in inwardOutwardOffice in get all data"
            }
        }
    }
    catch(error){
        return {
            error : true , 
            message : error.message
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

async function updateInwardOutwardOffice(id , payload){
    try{
        const data = await inwardOutwardOfficeModel.findByIdAndUpdate(id , payload );
        return {
            error : false ,
            data ,
            message : "data update successful"
        }
    }
    catch(err){
        return{
            error : true ,
            message : err.message
        }
    }
}

async function deleteInwardOutwardOffice(id){
    try{
        const data = await inwardOutwardOfficeModel.findByIdAndDelete(id);
        return{
            error : false ,
            data , 
            message : "data deleted successful"
        }
    }        
    catch(err) {
        return{
            error : true ,
            message : err.message 
        }
    }
}
module.exports = {getAllInwardOutwardOffice , getByIDInwardOutwardOffice , insertInwardOutwardOffice , deleteInwardOutwardOffice , updateInwardOutwardOffice}