const express = require('express');
const { getAll, getByID, insert, update, deleet } = require('../controllers/outward.controller');


const outwardRoute = express.Router();

outwardRoute.get('/', getAll)
outwardRoute.get('/:id', getByID)
outwardRoute.post('/', insert)
outwardRoute.put('/:id', update)
outwardRoute.delete('/:id', deleet)

module.exports = { outwardRoute }
