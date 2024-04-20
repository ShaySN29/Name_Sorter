//  This Module reads data from a text file as well as writes data to a text file

const fs = require('fs');

// The below function reads the data from the text file from the path defined in main.js and returns the contents
function readDataFromFile(path) {
    const fileContents = fs.readFileSync(path, 'utf8', (err) => {
        if (err) throw err;
    });
    return fileContents;
}

// The below function writes the data to a text file to the path defined in main.js
function writeDataToFile(path, data) {
    fs.writeFile(path, data, (err) => {
        if (err) {
            console.log(err);
            return;
        };
    });
}

// Exporting the functions to main.js
module.exports = { readDataFromFile, writeDataToFile };