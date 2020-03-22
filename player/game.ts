const game = require("./lib");
// const playAction = process.argv[process.argv.length - 1];

// based on os's data event
// EventEmitter
process.stdin.on("data", e => {
  const playAction = e.toString().trim();
  const result = game(playAction);
  console.log(result);
  if (result === 2) {
    console.log("Exiting...");
    process.exit(0);
  }
});
