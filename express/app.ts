const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.status(200);
  res.send("hello world");
});

app.listen(3000);