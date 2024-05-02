const fs = require('fs');

// Create welcome.txt
fs.writeFileSync('welcome.txt', 'Hello Node', 'utf-8');

// Read and console.log data from hello.txt
fs.readFile('welcome.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
