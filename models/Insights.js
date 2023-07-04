const mongoose = require("mongoose");

const websiteDataSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  wordCount: {
    type: Number,
    required: true,
  },
  mediaLinks: {
    type: [String],
    required: true,
  },
  webLinks: {
    type: [String],
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

const WebsiteDataModel = mongoose.model("WebsiteData", websiteDataSchema);

module.exports = WebsiteDataModel;
