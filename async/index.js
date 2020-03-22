console.log(
  (async function() {
    return 4;
  })()
); // AsyncFunction
console.log(
  (function() {
    return new Promise(resolve => resolve(4));
  })()
); // Function

(function() {
  const result = (async function() {
    const content = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(8);
      }, 10);
    });
    console.log(content);
    return 5;
  })();

  setTimeout(() => {
    console.log(result);
  }, 800);
})();
