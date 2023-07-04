const cheerio = require('cheerio');

exports.clean = string => {
  //cheerio is used to parse the HTML file
  const $ = cheerio.load(string);
  const visibleText = $('body').text();

  //replacing more than two spaces to one space
  const alphabet = visibleText.replace(/[^A-Za-z']+/g, " ").trim();

  //converting to lowercase
  const lowerCase = alphabet.toLowerCase();
  return lowerCase;
};
