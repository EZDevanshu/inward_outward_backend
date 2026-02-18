const courierCompany = require("../models/courierCompany.model");

async function getAllCourierCompany() {
    try{
        const data = await courierCompany.find();

        if(data){
            return{
                error : false ,
                data , 
                message : "data get successful in courierCompany table"
            }
        }
        else{
            return{
                error : true ,
                message : "some error occured in get data in courierCompany table"
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

async function getByIDCourierCompany(id){
    try{
        const data = await courierCompanyModel.findById(id);

        if(data){
            return {
                error : false ,
                data ,
                message : "data getByID successful in courierCompany table"
            }
        }
        else{
            return{
                error : true,
                message : "some error occured in getByID in courierCompany table"
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

async function insertCourierCompany(payload){
    try{
        const data = await courierCompanyModel.create(payload)
        if(data){
            return {
                error : false ,
                data ,
                message : "date insert successful in courierCompany table"
            }
        }
        else{
            return{
                error : true,
                message : "some error occured in insert data in courierCompany table"
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

async function updateCourierCompany(id , payload){
    try{
        const data = await courierCompanyModel.findByIdAndUpdate(id , payload);
        if(data){
            return{
                error : false,
                data ,
                message : "data update successful in courierCompany table"
            }
        }
        else{
            return {
                error : true,
                message : "some error occured in update courierCompany table"
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

async function deleteCourierCompany(id){
    try{
        const data = await courierCompanyModel.findByIdAndDelete(id)

        if(data){
            return {
                error : false ,
                data ,
                message : "data deleted successful in courierCompany table"
            }
        }
        else{
            return{
                error : true ,
                message : "some error occured in deleting data in courierCompany table"
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

module.exports = {getAllCourierCompany, deleteCourierCompany , updateCourierCompany , insertCourierCompany , getByIDCourierCompany}