const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/' || req.url == '/home') {
        res.write('This is my home page');
        res.end();
    } else if (req.url == '/about') {
        res.write('This is my about page');
        res.end();
    } else if (req.url == '/contact') {
        res.write('This is my contact page');
        res.end();
    }
    //Task 1 - add a about page in here
    // expected outcome when i add /about in the url it should display welcome to about me page
    // Task 2 - add a contact page and display a success message when user put /contact in the url

});

server.listen(3000);