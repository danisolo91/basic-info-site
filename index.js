let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    let path = req.url;
    if (path === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if (path === '/about') {
        fs.readFile('about.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if (path === '/contact-me') {
        fs.readFile('contact-me.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        fs.readFile('404.html', (err, data) => {
            if (err) throw err;
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
}).listen(8080);