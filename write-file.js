const fs = require('fs');

const helloWorld = () => {
    fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
        if (err) throw err;
        console.log('file written')
    });
}
    
module.exports = {
    helloWorld
}