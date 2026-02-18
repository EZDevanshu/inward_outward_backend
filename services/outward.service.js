const outwardModel = require("../models/outward.model");

async function getAllOutward(){
    try {
        const data = await outwardModel.find();

        if(data){
            return {
                error : false ,
                data ,
                message : "data fatched outward in get all data successful "
            }
        }
        else{
            return {
                error : true ,
                message : "some error occured in get all in outward table"
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

async function getByIDOutward(id){
    try {
        const data = await outwardModel.findById(id);

        if(data){
            return {
                error : false ,
                data ,
                message : "data fatched outward in get By ID data successful "
            }
        }
        else{
            return {
                error : true ,
                message : "some error occured in get By ID in outward table"
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

async function insertOutward(payload){
    try {
        const data = await outwardModel.insertMany(payload);

        if(data){
            return {
                error : false ,
                data ,
                message : "data fatched outward in insert data successful "
            }
        }
        else{
            return {
                error : true ,
                message : "some error occured in insert in outward table"
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

async function updateOutward(id , payload){
    try {
        const data = await outwardModel.findByIdAndUpdate(id , payload);

        if(data){
            return {
                error : false ,
                data ,
                message : "data fatched outward in Update data successful "
            }
        }
        else{
            return {
                error : true ,
                message : "some error occured in Update in outward table"
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

async function deleteOutward(id){
    try {
        const data = await outwardModel.findByIdAndDelete(id);

        if(data){
            return {
                error : false ,
                data ,
                message : "data fatched outward in delete data successful "
            }
        }
        else{
            return {
                error : true ,
                message : "some error occured in delete in outward table"
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

module.exports = {getAllOutward , getByIDOutward , insertOutward , updateOutward , deleteOutward}