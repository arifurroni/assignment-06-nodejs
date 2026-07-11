const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type' : 'text/plain'});
        res.end(`This is Home Page`);
    } else {
        res.writeHead(404, { 'content-type' : 'text/plain'});
        res.end(`404 Not Found`);
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});