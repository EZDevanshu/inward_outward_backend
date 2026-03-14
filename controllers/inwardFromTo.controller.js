const { getAllInwardFromTo, getByIDInwardFromTo, insertInwardFromTo, updateInwardFromTo, deleteInwardFromTo } = require('../services/inwardFromTo.service');

const getAll = async (req, res) => {
    try {
        const data = await getAllInwardFromTo();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getByID = async (req, res) => {
    try {
        const data = await getByIDInwardFromTo(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
}

const insert = async (req, res) => {
    try {
        const data = await insertInwardFromTo(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const data = await updateInwardFromTo(req.params.id, req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

const deleet = async (req, res) => {
    try {
        const data = await deleteInwardFromTo(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { getAll, getByID, insert, update, deleet };
