const oh = require("./lib");

oh.addListener("newlesson", res => {
  console.log("yeah, get a new event", res);
  if (res.wow > 50) {
    console.log("a big number!");
  }
});
