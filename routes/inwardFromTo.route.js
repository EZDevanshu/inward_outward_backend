const express = require('express');
const { getAll, getByID, insert, update, deleet } = require('../controllers/inwardFromTo.controller');

const inwardFromToRoute = express.Router();

inwardFromToRoute.get('/', getAll);
inwardFromToRoute.get('/:id', getByID);
inwardFromToRoute.post('/', insert);
inwardFromToRoute.put('/:id', update);
inwardFromToRoute.delete('/:id', deleet);

module.exports = { inwardFromToRoute };
