const { getAllInwardOutwardOffice, getByIDInwardOutwardOffice, insertInwardOutwardOffice, updateInwardOutwardOffice, deleteInwardOutwardOffice } = require("../services/inwardOutwardOffice.service");

getAll = async (req ,res)=>{
    try{
        const data = await getAllInwardOutwardOffice()
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).send({message : error.message})
    }
};

getByID = async (req, res)=>{
    try{
        const data = await getByIDInwardOutwardOffice(req.params.id)
        res.status(200).json(data);
    }
    catch(error) {
        res.status(500).send({message : error.message})
    }
};

insert = async (req , res)=>{
    try{
        const data = await insertInwardOutwardOffice(req.body)
        res.status(201).json(data);
    }
    catch(error){
        res.status(500).send({message : error.message});
    }
}

update  = async (req , res)=>{
    try{
        const data = await updateInwardOutwardOffice(req.params.id);
        res.status().json(data)
    }
    catch(error) {
        res.status(500).send({message : error.message})
    }
}

deleet = async (req , res)=>{
    try{
        const data = await deleteInwardOutwardOffice(req.params.id);
        res.status().josn(data)
    }
    catch(error){
        res.status().send({message : error.message})
    }
}
module.exports = {getAll , getByID , insert , deleet};