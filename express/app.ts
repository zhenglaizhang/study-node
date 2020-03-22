const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const myLogger = (req, res, next) => {
  console.log("LOGGED");
  next();
};

const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

// middleware functions that are loaded first are also executed first.
app.use(requestTime);
app.use(myLogger);

// app.METHOD(PATH, HANDLER)
app.get("/", function(req, res) {
  res.status(200).send("hello world");
});

app.get("/error", function(req, res) {
  console.log(req.requestTime);
  throw new Error("Boom");
});

app.post("/", function(req, res) {
  res.send("get a post method");
});

app.put("/", function(req, res) {
  res.send("get a put method");
});

app.delete("/user", function(req, res) {
  res.send("get a delete medhod");
});

// NOTE: For best results, use a reverse proxy cache to improve performance of serving static assets.
// app.use("/static", express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));
app.use(express.static("files"));

app.use(function(err, req, res, next) {
  console.error("met with error", err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => console.log(`App listening on port ${port}`));
