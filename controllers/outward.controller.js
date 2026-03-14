const { getAllOutward, getByIDOutward, insertOutward, updateOutward, deleteOutward } = require("../services/outward.service");

const getAll = async (req, res) => {
    try {
        const data = await getAllOutward();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getByID = async (req, res) => {
    try {
        const data = await getByIDOutward(req.params.id);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).send({ message: error.message })
    }
}

const insert = async (req, res) => {
    try {
        const data = await insertOutward(req.body);
        res.status(201).json(data);
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
}

const update = async (req, res) => {
    try {
        const data = await updateOutward(req.params.id, req.body);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
}

const deleet = async (req, res) => {
    try {
        const data = await deleteOutward(req.params.id);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = { getAll, getByID, deleet, update, insert };