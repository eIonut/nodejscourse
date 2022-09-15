const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our homepage');
    }
    if(req.url === '/about'){
        res.end('Here is our about page');
    }
    res.end(`<h1>Oops!</h1>
    <p> We cant find the page </p>
    <a href="/">Back  home</a>
    `);
  
})

server.listen(5000);