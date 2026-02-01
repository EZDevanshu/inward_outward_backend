const express = require('express');
const { getAll, getByID, insert, update, deleet } = require('../controllers/inwardOutwardOffice.controller');

const inwardOutwardOffice = express.Router();


inwardOutwardOffice.get('/' , getAll);
inwardOutwardOffice.get('/:id' , getByID);
inwardOutwardOffice.post('/' , insert);
inwardOutwardOffice.post('/', update)
inwardOutwardOffice.delete('/' , deleet)

module.exports = {inwardOutwardOffice}