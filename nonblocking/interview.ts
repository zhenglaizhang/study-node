// every event loop triggers a new call stack
// so throws error in timeout callback won't be catched from interview call site
// callback hell
// hard to paralize
//    async.js
//    thunk
interview(function(err, res) {
  if (!err) {
    return console.log("smile");
    interview(function(err, res) {
      // second round
      if (!err) {
        interview(function(err, res) {}); // third round
      }
    });
  } else {
    return console.log("cry");
  }
});

function interview(callback) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      callback(null, "success");
    } else {
      callback(new Error("failure"), "failure");
    }
  }, 500);
}
