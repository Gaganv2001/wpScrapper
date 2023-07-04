const axios = require('axios');
const cheerio = require('cheerio');

exports.getMediaLinks = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const mediaLinks = [];
    
    // Retrieve image links
    $('img').each((index, element) => {
      const src = $(element).attr('src');
      mediaLinks.push(src);
    });

    // Retrieve video links
    $('video').each((index, element) => {
      const src = $(element).attr('src');
      mediaLinks.push(src);
    });

    return mediaLinks;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to retrieve media links');
  }
};
