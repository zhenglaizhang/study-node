// only pending -> resolved status for only once

// copy and paste into chrome console and view the detailed output
(function() {
  const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve();
    }, 500);
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));

  console.log(promise); // pending

  setTimeout(() => {
    console.log(promise); // undefined
  }, 800);
})();

// copy and paste into chrome console and view the detailed output
(function() {
  const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject(new Error("boom"));
    }, 500);
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log("finally"));

  console.log(promise); // pending

  setTimeout(() => {
    console.log(promise); // undefined
  }, 800);
})();

// Promise.all
// Promise.race
