const { default: inOutwardMode } = require("../models/inOutwardMode");

async function getAllInOutwardMode() {
    try{
        const data = await inOutwardMode.find();

        if(data){
            return{
                error : false ,
                data , 
                message : "data get successful in inOutwardMode table"
            }
        }
        else{
            return{
                error : true ,
                message : "some error occured in get data in inOutwardMode table"
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

async function getByIDInOutWardMode(id){
    try{
        const data = await inOutwardMode.findById(id);

        if(data){
            return {
                error : false ,
                data ,
                message : "data getByID successful in inOutwardMode table"
            }
        }
        else{
            return{
                error : true,
                message : "some error occured in getByID in inOutwardMode table"
            }
        }
    }
    catch(error){
        return {
            error :true,
            message : error.message
        }
    }
}

async function insertInOutwardMode(payload){
    try{
        const data = await inOutwardMode.create(payload)
        if(data){
            return {
                error : false ,
                data ,
                message : "date insert successful in inOutwardMode table"
            }
        }
        else{
            return{
                error : true,
                message : "some error occured in insert data in inOutwardMode table"
            }
        }
    }
    catch(error){
        return{
            error : true,
            message : error.message
        }
    }
}

async function updateInOutwardMode(id , payload){
    try{
        const data = await inOutwardMode.findByIdAndUpdate(id , payload);
        if(data){
            return{
                error : false,
                data ,
                message : "data update successful in inOutwardMode table"
            }
        }
        else{
            return {
                error : true,
                message : "some error occured in update inOutwardMode table"
            }
        }
    }
    catch(error){
        return {
            error : true,
            message : error.message
        }
    }
}

async function deleteInOutwardMode(id){
    try{
        const data = await inOutwardMode.findByIdAndDelete(id)

        if(data){
            return {
                error : false ,
                data ,
                message : "data deleted successful in inOutwardMode table"
            }
        }
        else{
            return{
                error : true ,
                message : "some error occured in deleting data in inOutwardMode table"
            }
        }
    }
    catch(error){
        return {
            error : true,
            message : error.message
        }
    }
}

module.exports = {deleteInOutwardMode, updateInOutwardMode , insertInOutwardMode , getByIDInOutWardMode , getAllInOutwardMode}