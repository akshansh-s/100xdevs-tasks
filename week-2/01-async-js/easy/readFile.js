const fs = require('fs');

fs.readFile('./3-read-from-file.md', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file', err);
        return;
    }
    console.log(data);
});
