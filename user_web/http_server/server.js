const http = require("http");

const server = http.createServer((req, res) => {
  console.log("REQ", req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  res.end("<h1>First Server</h1>");
});

server.listen(8008, () => {
  console.log("Listening on port 8008");
});
