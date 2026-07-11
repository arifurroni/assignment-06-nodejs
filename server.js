const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type' : 'text/plain'});
    res.end(`Server is running on port: ${port}`);
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});