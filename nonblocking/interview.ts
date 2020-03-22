// every event loop triggers a new call stack
// so throws error in timeout callback won't be catched from interview call site
// callback hell
// hard to paralize
//    async.js
//    thunk

// interview(function(err, res) {
//   if (!err) {
//     return console.log("smile");
//     interview(function(err, res) {
//       // second round
//       if (!err) {
//         interview(function(err, res) {}); // third round
//       }
//     });
//   } else {
//     return console.log("cry");
//   }
// });

(() => {
  const promise = interview(1);
  const direct = promise
    .then(res => {
      console.log("smile");
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve("accept"), 800);
      });
    })
    .catch(err => console.log("cry"));
  const accept = direct.then(res => "accept").then(console.log);
  const reject = accept
    .then(res => {
      throw new Error("Refuse");
    })
    .catch(err => console.log("then refused (not encouraged)"));
})();

function interview(round: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("success");
      } else {
        const error = new Error("fail");
        (error as any).round = round;
        reject(error);
      }
    }, 500);
  });
}

var p = interview(1)
  .then(() => interview(2))
  .then(() => interview(3))
  .then(() => console.log("Final Smile"))
  .catch(err => {
    console.log("cry at round #" + err.round);
  });

(async function() {
  try {
    await Promise.all([interview(1), interview(2)]);
  } catch (e) {
    return console.log("cry again at #", e.round);
  }
  console.log("simle again");
})();
