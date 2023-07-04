const express = require('express');
const router = express.Router();
const WebsiteDataModel = require("../models/Insights");


//API which receives the id of domain as a arguement
router.delete("/delete/:id", async(req, res) => {    
    const id = req.params.id;

    //if the domain is present delete else throw exception
    try {
        const result = await WebsiteDataModel.findOneAndDelete({_id : id});
        if (!result) {
            return res.status(404).send('Domain not found');
        }
        res.send('Domain deleted successfully');
    } catch (error) {
        return res.status(400).json({message: error});
    }
});

module.exports = router;
