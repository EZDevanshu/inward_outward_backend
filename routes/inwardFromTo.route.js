const express = require('express');
const { getAll, getByID, insert, update, deleet } = require('../controllers/inwardFromTo.controller');
const verifyToken = require('../middlewares/auth.middleware');

const inwardFromToRoute = express.Router();

inwardFromToRoute.use(verifyToken);

inwardFromToRoute.get('/', getAll);
inwardFromToRoute.get('/:id', getByID);
inwardFromToRoute.post('/', insert);
inwardFromToRoute.put('/:id', update);
inwardFromToRoute.delete('/:id', deleet);

module.exports = { inwardFromToRoute };
