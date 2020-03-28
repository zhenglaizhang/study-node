const http = require("http");
const fs = require("fs");

http
  .createServer(function(req, res) {
    if (req.url === "/favicon.ico") {
      res.writeHead(200);
      res.end();
      return;
    }
    // console.log(req.url);
    // console.log(req.httpVersion);
    // console.log(req.headers);
    // console.log(res);
    res.writeHead(200);
    // res.end("Hello");
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  })
  .listen(3000, () => {
    console.log("listened 3000");
  });
