const inwardModel = require("../models/inward.model");

async function getAllInward(){
    try{
        const data = await inwardModel.find();
        if(data){
            return{
                error : false ,
                data, 
                message : "data fatched successfull in inward table"
            }
        }
        else{
            return{
                error : true,
                message : "some erro occured in fatching data in inward table"
            }
        }
    } 
    catch(error){
        return{
            error : true ,
            message : error.message
        }
    }
}

async function getByIDInward(id){
    try{
        const data = await inwardModel.findById(id);
        if(data){
            return {
                error : false ,
                data , 
                message : "data fatched successful getby id in inward table"
            }
        }
        else{
            return {
                error : true ,
                message : "some error occcure in faching data by id in inward table"
            }
        }
    }
    catch(error){
        return{
            error : true ,
            message : error.message
        }
    }
}   

async function insertInward(payload) {
    try{
        const data = await inwardModel.create(payload);
        if(data){
            return {
                error : false ,
                data , 
                message : "data insert successful in inward table"
            }
        }
        else{
            return{
                error : true ,
                message : "some error occured in insert data in inward table"
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

async function updateInward(id , payload){
    try{
        const data = await inwardModel.findByIdAndUpdate(id , payload);
        if(data){
            return{
                error : false ,
                data ,
                message : "data updated successful in inward table"
            }
        }
        else{
            return{
                error : true ,
                message : "some error occured in update in inward table"
            }
        }
    }
    catch(error){
        return{
            error : true ,
            message : error.message 
        }
    }
}

async function deleteInward(id){
    try{
        const data = await inwardModel.findByIdAndDelete(id);
        if (data){
            return{
                error : false ,
                data ,
                message : "record delete successful in inward table"
            }
        }
        else{
            return {
                error : true ,
                message : "some error occured in deleting data in inwaed table"
            }
        }
    }
    catch(error){
        return{
            error : true ,
            message : error.message
        }
    }
}


module.exports = {getAllInward , getByIDInward , insertInward , deleteInward , updateInward}