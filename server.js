const http = require('http');
const writeFile = require('./write-file');

const port = 8000;

// Handles HTTP requests.
const requestHandler = (request, response) => {
    response.end(`Handling request on port ${port}`)
}

// Create a server and pass in the  requestHandler function
const server = http.createServer(requestHandler)

// Start the server listening on port 8000
server.listen(port, (err) => {
    if (err){
        return console.log(`Error:  ${err}`)
    }
    console.log(`Server running on port ${port}`)
})

//Write to the file
writeFile.helloWorld()