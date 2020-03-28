const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  // NOTE: direct use os.cpus().length not optimal, since some cpu cycyles are used for event looping and processing
  for (let i = 0; i < os.cpus().length / 2; i++) {
    const worker = cluster.fork();
    let missing = 0;
    const interval = setInterval(() => {
      console.log("ping");
      worker.send("ping");
      ++missing;

      if (missing > 3) {
        clearInterval(interval);
        process.kill(worker.process.pid);
        // worker.exit(1);
      }
    }, 300);
    worker.on("message", msg => {
      console.log("pong");
      if (msg === "pong") {
        --missing;
      }
    });
  }

  // take care to recover
  cluster.on("exit", () => {
    setTimeout(() => {
      console.log("restarting child...");
      cluster.fork();
    }, 5000);
  });
} else {
  require("./app");

  process.on("message", msg => {
    if (msg === "ping") {
      process.send("pong");
    }
  });

  process.on("uncaughtException", err => {
    console.error(err);
    // or try to recover...
    process.exit(1);
  });
  setInterval(() => {
    console.log(process.memoryUsage().rss);
    if (process.memoryUsage().rss > 269959168) {
      console.log("oom");
      process.exit(1);
    }
  }, 5000);
}
