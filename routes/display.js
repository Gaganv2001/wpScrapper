const express = require('express')
const app = express()
const WebsiteDataModel = require("../models/Insights");


//API to fetch the data from the database
app.get("/" , async(req,res) => {

    try {
        const infos = await WebsiteDataModel.find()
        console.log(infos);
        res.send(infos)
    } catch (error) {
        return res.status(400).json({ error });
        
    }
})




module.exports = app;