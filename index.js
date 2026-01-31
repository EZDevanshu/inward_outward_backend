const mongoose = require('mongoose');
const express = require('express');
const { inwardOutwardOffice } = require('./routes/InwardOutwardOffice.route');
const connectionDB = require('./db/mongo');

const app = express();

const PORT = 5000;
connectionDB();

app.use(express.json());

app.use('/inward-outward-office' , inwardOutwardOffice);

app.listen(PORT , ()=>{
    console.log(`server start at ${PORT}`)
})

