const express = require('express');
const { getAll, getByID, insert, update, deleet } = require('../controllers/inwardOutwardOffice.controller');

const inwardOutwardOffice = express.Router();


inwardOutwardOffice.get('/' , getAll);
inwardOutwardOffice.get('/:id' , getByID);
inwardOutwardOffice.post('/' , insert);
inwardOutwardOffice.put('/:id', update)
inwardOutwardOffice.delete('/:id' , deleet)

module.exports = {inwardOutwardOffice}