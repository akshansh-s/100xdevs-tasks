const fs = require('fs');
const data=" Hello write this to file"

fs.writeFile('./3-read-from-file.md',data , 'utf8', (err, data) => {
    if (err) {
        console.error('Error writing the file', err);
        return;
    }
    console.log("File written sucessfully");
});