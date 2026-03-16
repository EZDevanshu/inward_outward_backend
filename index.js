require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const connectionDB = require('./db/mongo');
const { inwardOutwardOffice } = require('./routes/inwardOutwardOffice.route');
const { inwardRoute } = require('./routes/inward.route');
const { inOutwardModeRoute } = require('./routes/inOutward.route');
const { courierCompanyRoute } = require('./routes/courierCompany.route');
const { outwardRoute } = require('./routes/outward.route');
const { inwardFromToRoute } = require('./routes/inwardFromTo.route');
const { authRouter } = require('./routes/auth.route');

const app = express();

const PORT = process.env.PORT || 5000;
connectionDB();

app.use(cors());
app.use(express.json());

app.use('/inward-outward-office' , inwardOutwardOffice);
app.use('/inward' , inwardRoute);
app.use('/in-outward-mode' , inOutwardModeRoute);
app.use('/courier-company' , courierCompanyRoute);
app.use('/outward' , outwardRoute);
app.use('/inward-from-to', inwardFromToRoute);
app.use('/auth' , authRouter);

app.listen(PORT , ()=>{
    console.log(`server start at ${PORT}`)
})

