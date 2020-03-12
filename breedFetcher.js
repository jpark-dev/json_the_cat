const request = require('request');
const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error !== null) {
      callback(error, body);
    } else {
      const desc = JSON.parse(body);
      if (desc.status !== undefined) {
        callback(desc);
      } else if (desc[0] === undefined) {
        callback(error, 'Breed does not exist!');
      } else {
        // replace newline characters == .replace(/[\r\n]+/g, '\n');
        callback(error, desc[0].description.trim());
      }
    }

  });
};

module.exports = { fetchBreedDescription };
