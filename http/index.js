const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  // NOTE: direct use os.cpus().length not optimal, since some cpu cycyles are used for event looping and processing
  for (let i = 0; i < os.cpus().length / 2; i++) {
    cluster.fork();
  }
} else {
  require("./app");
}
