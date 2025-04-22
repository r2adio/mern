const http = require("http");
// localhost or loopback address
const hostname = "127.0.0.1";
const port = 3000;

// what server needs to respond
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    // after sending response, to end the response use:
    res.end("root directory");
  } else if (req.url === "/counter") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    // after sending response, to end the response use:
    res.end("billing the purchases");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    // after sending response, to end the response use:
    res.end("404 Not found");
  }
});

// how server should listen
server.listen(port, hostname, () => {
  console.log(`server is listening at http://${hostname}:${port}`);
});
