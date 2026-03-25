const express = require('express');
const { getAll, getByID, insert, update, deleet } = require('../controllers/inwardOutwardOffice.controller');
const verifyToken = require('../middlewares/auth.middleware');

const inwardOutwardOffice = express.Router();

inwardOutwardOffice.use(verifyToken);

inwardOutwardOffice.get('/' , getAll);
inwardOutwardOffice.get('/:id' , getByID);
inwardOutwardOffice.post('/' , insert);
inwardOutwardOffice.put('/:id', update)
inwardOutwardOffice.delete('/:id' , deleet)

module.exports = {inwardOutwardOffice}