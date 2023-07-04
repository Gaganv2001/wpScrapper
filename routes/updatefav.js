const express = require('express');
const app = express()
const WebsiteDataModel = require("../models/Insights");

app.post('/markasfav', async (req, res) => {
  try {
    const { id } = req.body;
    
    // Find the document with the provided ID
    const websiteData = await WebsiteDataModel.findById(id);
    
    if (!websiteData) {
      return res.status(404).json({ message: 'Website data not found' });
    }

    // Update the 'favorite' field to true
    websiteData.favorite = true;
    
    // Save the updated document
    await websiteData.save();
    
    return res.status(200).json({ message: 'Favorite updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/removeasfav', async (req, res) => {
  try {
    const { id } = req.body;
    
    // Find the document with the provided ID
    const websiteData = await WebsiteDataModel.findById(id);
    
    if (!websiteData) {
      return res.status(404).json({ message: 'Website data not found' });
    }

    // Update the 'favorite' field to false
    websiteData.favorite = false;
    
    // Save the updated document
    await websiteData.save();
    
    return res.status(200).json({ message: 'Favorite updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = app;
