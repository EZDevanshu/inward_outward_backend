const express = require('express');
const { getAll, getByID, insert } = require('../controllers/inwardOutwardOffice.controller');

const inwardOutwardOffice = express.Router();


inwardOutwardOffice.get('/' , getAll);
inwardOutwardOffice.get('/:id' , getByID);
inwardOutwardOffice.post('/' , insert);

module.exports = {inwardOutwardOffice}