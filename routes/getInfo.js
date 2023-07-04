const express = require("express");
const app = express();
const cors = require("cors");
const { fetchUrlContent } = require("./fetch-url-content");
const { clean } = require("./clean");
const { count } = require("./count");
const { getMediaLinks } = require("./get-media-links");
const { getWebLinks } = require("./get-web-links");
const WebsiteDataModel = require("../models/Insights");

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/", async function (req, res) {
  try {
    const url = req.body.url;
        //fetching the content of URL
        const content = await fetchUrlContent(url);

        //extracting only necessary words from URL
        const cleanedContent = clean(content);
    
        //counting the words
        const wordCount = count(cleanedContent);
    
        //extracting the media links
        const mediaLinks = await getMediaLinks(url);
    
        //extracting the weblinks
        const webLinks = await getWebLinks(url);
    
    const result = {
      url,
      wordCount,
      mediaLinks,
      webLinks
    };
    const websiteData = new WebsiteDataModel(result);

  try {
  // Save the websiteData object to the database
  const savedData = await websiteData.save();
  console.log("Data saved to MongoDB:", savedData);
  res.status(200).json(savedData);
  } catch (error) {
  console.error("Error saving data to MongoDB:", error);
  res.status(500).send("An error occurred while saving data");
}
    
    // res.status(200).json(result);
    // res.send(result)
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

module.exports = app;
