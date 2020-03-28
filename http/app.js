const http = require("http");
const fs = require("fs");

const leak = [];
http
  .createServer(function(req, res) {
    if (req.url === "/favicon.ico") {
      res.writeHead(200);
      res.end();
      return;
    }

    /// test to trigger exception
    // setTimeout(() => {
    //   // opps, no window under node, exiting...
    //   // ReferenceError: window is not defined
    //   console.log(window.location.href);
    // }, 50);

    // console.log(req.url);
    // console.log(req.httpVersion);
    // console.log(req.headers);
    // console.log(res);
    res.writeHead(200);
    // res.end("Hello");
    // fs.createReadStream(__dirname + "/index.html").pipe(res);
    const result = fs.readFileSync(__dirname + "/index.html");
    leak.push(result);
    res.end(result);
  })
  .listen(3000, () => {
    // simulate chld process being busy
    while (true) {}

    console.log("listened 3000");
  });
