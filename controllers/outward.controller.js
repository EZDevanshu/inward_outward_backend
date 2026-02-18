const { getAllOutward, getByIDOutward, insertOutward, updateOutward, deleteOutward } = require("../services/outward.service");

getAll = async (req, res) => {
    try {
        const data = await getAllOutward();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).send({ message: error.message })
    }
}

getByID = async (req, res) => {
    try {
        const data = await getByIDOutward(req.params.id);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).send({ message: error.message })
    }
}

insert = async (req, res) => {
    try {
        const data = await insertOutward(req.body);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).send({ message: error.message })
    }
}

update = async (req, res) => {
    try {
        const data = await updateOutward(req.params.id, req.body);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).send({ message: error.message })
    }
}

deleet = async (req, res) => {
    try {
        const data = await deleteOutward(req.params.id);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).send({ message: error.message })
    }
}

module.exports = { getAll, getByID, deleet, update, insert };