const { getAllInOutwardMode, getByIDInOutWardMode, insertInOutwardMode, updateInOutwardMode, deleteInOutwardMode } = require("../services/inOutwardMode.service");

const getAll = async(req , res)=>{
    try{
        const data = await getAllInOutwardMode();
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).send({message : error.message})
    }
}

const getByID = async(req , res)=>{
    try{
        const data = await getByIDInOutWardMode(req.params.id);
        res.status(200).json(data);
    }
    catch(error){
        res.status(404).send({message : error.message})
    }
}

const insert = async(req , res)=>{
    try{
        const data = await insertInOutwardMode(req.body);
        res.status(201).json(data);
    }
    catch(error){
        res.status(400).send({message : error.message})
    }
}

const update = async(req , res)=>{
    try{
        const data = await updateInOutwardMode(req.params.id , req.body);
        res.status(200).json(data);
    }
    catch(error){
        res.status(400).send({message : error.message})
    }
}

const deleet = async(req , res)=>{
    try{
        const data = await deleteInOutwardMode(req.params.id);
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).send({message : error.message})
    }
}

module.exports = {deleet , update , insert , getAll , getByID}