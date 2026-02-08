const express = require('express');
const { getAll, getByID, insert, update, deleet } = require('../controllers/inward.controller');


const inwardRoute = express.Router();


inwardRoute.get('/' , getAll);
inwardRoute.get('/:id' , getByID);
inwardRoute.post('/' , insert);
inwardRoute.put('/:id' , update);
inwardRoute.delete('/:id' , deleet );


module.exports = {inwardRoute}