const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type' : 'text/plain'});
        res.end(`This is Home Page`);
    } else if (req.url === "/about") {
        res.writeHead(200, { 'content-type' : 'text/plain'});
        res.end(`This is About Page`);
    } else if (req.url === "/contact") {
        res.writeHead(200, { 'content-type' : 'text/plain'});
        res.end(`This is Contact Page`);
    } else {
        res.writeHead(404, { 'content-type' : 'text/plain'});
        res.end(`404, Page Not Found`);
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});