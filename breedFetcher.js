const request = require('request');

const arg = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`, (error, response, body) => {
  if (error) {
    return console.log('error:', error); // Print the error if one occurred
  }
  
  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log(`no specific breed found: ${arg[0]}`);
  }
  for (let info in data) {
    return console.log(data[info]);
  }
});

