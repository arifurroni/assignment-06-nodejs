const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');

    if (req.url === '/') {
        res.writeHead(200);
        res.end(`
                <html>
                    <body>
                        <h1>This is Home Page</h1>
                        <p>Welcome! to the Home Page</p>

                        <a href="/">Home</a> |
                        <a href="/about">About</a> |
                        <a href="/contact">Contact</a>
                    </body>
                </html>
            `);
    } else if (req.url === "/about") {
        res.writeHead(200);
        res.end(`
                <html>
                    <body>
                        <h1>This is About Page</h1>
                        <p>Welcome! to the About Page</p>

                        <a href="/">Home</a> |
                        <a href="/about">About</a> |
                        <a href="/contact">Contact</a>
                    </body>
                </html>
            `);
    } else if (req.url === "/contact") {
        res.writeHead(200);
        res.end(`
                <html>
                    <body>
                        <h1>This is Contact Page</h1>
                        <p>Welcome! to the Contact Page</p>

                        <a href="/">Home</a> |
                        <a href="/about">About</a> |
                        <a href="/contact">Contact</a>
                    </body>
                </html>
            `);
    } else {
        res.writeHead(404);
        res.end(`
                <html>
                    <body>
                        <h1>404, Page Not Found</h1>
                        <p>The page you are looking for does not exist.</p>

                        <a href="/">Go to Home</a>
                    </body>
                </html>
            `);
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

