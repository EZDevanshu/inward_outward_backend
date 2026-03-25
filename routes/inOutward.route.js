const express = require('express');
const { getAll, getByID, insert, update, deleet } = require('../controllers/inOutward.controller');
const verifyToken = require('../middlewares/auth.middleware');

const inOutwardModeRoute = express.Router();

inOutwardModeRoute.use(verifyToken);

inOutwardModeRoute.get('/' , getAll);
inOutwardModeRoute.get('/:id' , getByID)
inOutwardModeRoute.post('/' , insert);
inOutwardModeRoute.put('/:id' , update);
inOutwardModeRoute.delete('/:id' , deleet);

module.exports = {inOutwardModeRoute}