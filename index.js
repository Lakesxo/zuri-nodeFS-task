// Require file system module
const fs = require('fs');
// cache Api URL
const apiURL = 'https://jsonplaceholder.typicode.com/posts';
// Require https module
const https = require('https');

// Make a get request 
https.get(apiURL, response => {
    let mainData = '';
    response.on('data', data => {
        mainData += data;
    })
    // Function to write fetched data into posts.json file
    writeFile = () => {
        fs.writeFile(`${__dirname}/result/posts.json`, mainData, () => {
            console.log('File written from API successfully');
        })
    }
    response.on('end', writeFile)
})
  .on('err', (err) => {
    console.log(err)
  })