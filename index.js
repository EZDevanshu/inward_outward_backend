const mongoose = require('mongoose');
const express = require('express');

const connectionDB = require('./db/mongo');
const { inwardOutwardOffice } = require('./routes/InwardOutwardOffice.route');
const { inwardRoute } = require('./routes/inward.route');
const { inOutwardModeRoute } = require('./routes/inOutward.route');
const { courierCompanyRoute } = require('./routes/courierCompany.route');
const { outwardRoute } = require('./routes/outward.route');

const app = express();

const PORT = 5000;
connectionDB();

app.use(express.json());

app.use('/inward-outward-office' , inwardOutwardOffice);
app.use('/inward' , inwardRoute);
app.use('/in-outward-mode' , inOutwardModeRoute);
app.use('/courier-company' , courierCompanyRoute);
app.use('/outward' , outwardRoute);

app.listen(PORT , ()=>{
    console.log(`server start at ${PORT}`)
})

