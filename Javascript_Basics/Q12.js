const http = require('http');

// Create a server that listens on port 3000
const server = http.createServer((req, res) => {
    // Get the current URL from the request
    let currentUrl = `${req.headers['host']}${req.url}`;
    
    // Send the current URL as the response
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Current URL: http://${currentUrl}`);
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
