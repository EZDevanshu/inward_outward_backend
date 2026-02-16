const { getAllCourierCompany, getByIDCourierCompany, insertCourierCompany, updateCourierCompany, deleteCourierCompany } = require("../services/courierCompany.service");

getAll = async (req , res) =>{
    try{
        const data = await getAllCourierCompany();
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).send({message : error.message});
    }
}

getByID = async (req , res) =>{
    try{
        const data = await getByIDCourierCompany(req.params.id);
        res.status(200).json(data);
    }
    catch(error){
        res.status(404).send({message : error.message})
    }
}

insert = async (req , res) =>{
    try{
        const data = await insertCourierCompany(req.body);
        res.status(201).json(data);
    }
    catch(error){
        res.status(400).send({message : error.message})
    }
}

update = async (req , res) =>{
    try{
        const data = await updateCourierCompany(req.params.id , req.body);
        res.status(200).json(data);
    }
    catch(error){
        res.status(400).send({message : error.message});
    }
}

deleet = async (req , res) =>{
    try{
        
        const data = await deleteCourierCompany(req.params.id);
        res.status(200).json(data);
    }
    catch(error){
        res.status(409).send({message : message.error});
    }
}

module.exports = {getAll , getByID , deleet , update , insert};