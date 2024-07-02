const http = require('http');  // Import the http module

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Check the HTTP method of the request
  if (req.method === 'GET') {
    res.statusCode = 200;  // Set HTTP status code to 200 OK
    res.setHeader('Content-Type', 'text/plain');  // Set the Content-Type header to text/plain
    res.end('Received a GET request\n');  // Respond to the GET request
  } else if (req.method === 'POST') {
    res.statusCode = 200;  // Set HTTP status code to 200 OK
    res.setHeader('Content-Type', 'text/plain');  // Set the Content-Type header to text/plain
    res.end('Received a POST request\n');  // Respond to the POST request
  } else {
    res.statusCode = 405;  // Set HTTP status code to 405 Method Not Allowed
    res.end('Method Not Allowed\n');  // Respond to other methods
  }
});

const PORT = 3000;  // Define the port number to listen on
server.listen(PORT, () => {  // Start the server and listen on the specified port
  console.log(`Server running at http://localhost:${PORT}/`);  // Log a message when the server starts successfully
});

const http = require('http');  // Import the http module
const url = require('url');  // Import the url module to parse URL addresses

// Create an HTTP server
const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;  // Parse the URL to find the path

  // Routing logic based on the path
  if (pathname === '/') {
    res.statusCode = 200;  // Set HTTP status code to 200 OK
    res.setHeader('Content-Type', 'text/html');  // Set the Content-Type header to text/html
    res.end('<h1>Welcome to the Home Page</h1>');  // Send HTML content for the home page
  } else if (pathname === '/about') {
    res.statusCode = 200;  // Set HTTP status code to 200 OK
    res.setHeader('Content-Type', 'text/html');  // Set the Content-Type header to text/html
    res.end('<h1>About Us</h1>');  // Send HTML content for the about page
  } else {
    res.statusCode = 404;  // Set HTTP status code to 404 Not Found
    res.setHeader('Content-Type', 'text/html');  // Set the Content-Type header to text/html
    res.end('<h1>Page Not Found</h1>');  // Send HTML content for a 404 error
  }
});

const PORT = 3000;  // Define the port number to listen on
server.listen(PORT, () => {  // Start the server and listen on the specified port
  console.log(`Server running at http://localhost:${PORT}/`);  // Log a message when the server starts successfully
});