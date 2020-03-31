function takesAFunc(fn, z) {
  return fn("fn:" + z);
}

function returnsAFunc() {
  return function(p) {
    console.log("p: " + p);
  };
}

takesAFunc(returnsAFunc(), "!");
