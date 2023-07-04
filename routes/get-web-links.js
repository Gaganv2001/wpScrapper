const axios = require('axios');
const cheerio = require('cheerio');

exports.getWebLinks = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const webLinks = [];

    // Retrieve all anchor links
    $('a').each((index, element) => {
      const href = $(element).attr('href');
      webLinks.push(href);
    });

    return webLinks;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to retrieve web links');
  }
};
