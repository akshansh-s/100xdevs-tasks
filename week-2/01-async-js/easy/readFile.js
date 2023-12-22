const fs = require('fs');

fs.readFile('./3-read-from-file.md', 'utf8', (err, data) => {
    for (let i=0;i<1000000000;i++){
        continue;
    }
    if (err) {
        console.error('Error reading the file', err);
        return;
    }
    console.log(data);
});

