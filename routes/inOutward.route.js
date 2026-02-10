const express = require('express');
const { getAll, getByID, insert, update, deleet } = require('../controllers/inOutward.controller');

const inOutwardModeRoute = express.Router();

inOutwardModeRoute.get('/' , getAll);
inOutwardModeRoute.get('/:id' , getByID)
inOutwardModeRoute.post('/' , insert);
inOutwardModeRoute.put('/:id' , update);
inOutwardModeRoute.delete('/:id' , deleet);

module.exports = {inOutwardModeRoute}