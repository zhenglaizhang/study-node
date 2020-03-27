process.on("message", str => {
  console.log("get master message: ", str);
  process.send("i am child");
});
