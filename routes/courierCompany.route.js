const express = require('express');
const { getAll, getByID, insert, update, deleet } = require('../controllers/courierCompany.controller');
const courierCompanyRoute = express.Router();

courierCompanyRoute.get('/' , getAll);
courierCompanyRoute.get('/:id' , getByID)
courierCompanyRoute.post('/' , insert);
courierCompanyRoute.put('/:id' , update);
courierCompanyRoute.delete('/:id' , deleet);

module.exports = {courierCompanyRoute}