const { getAllInward, getByIDInward, insertInward, updateInward, deleteInward } = require("../services/inward.service")

getAll = async (req , res) =>{
    try{
        const data = await getAllInward();
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).send({message : error.message});
    }
}

getByID = async (req , res) =>{
    try{
        const data = await getByIDInward(req.params.id);
        res.status(200).json(data);
    }
    catch(error){
        res.status(404).send({message : error.message})
    }
}

insert = async (req , res) =>{
    try{
        const data = await insertInward(req.body);
        res.status(201).json(data);
    }
    catch(error){
        res.status(400).send({message : error.message})
    }
}

update = async (req , res) =>{
    try{
        const data = await updateInward(req.params.id , req.body);
        res.status(200).json(data);
    }
    catch(error){
        res.status(400).send({message : error.message});
    }
}

deleet = async (req , res) =>{
    try{
        
        const data = await deleteInward(req.params.id);
        res.status(200).json(data);
    }
    catch(error){
        res.status(409).send({message : message.error});
    }
}

module.exports = {getAll , getByID , deleet , update , insert};