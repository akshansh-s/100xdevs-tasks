const fs = require('fs');

fs.readFile('./1test.txt', 'utf8', (err, data) => {

    if (err) {
        console.error('Error reading the file', err);
        return;
    }

    const cleanedData = data.replace(/\s+/g, ' ');

    fs.writeFile('./1test.txt', cleanedData , 'utf8', (err) => {
        if (err) {
            console.error('Error writing the file', err);
            return;
        }
        console.log("File replaced sucessfully");

    });
});