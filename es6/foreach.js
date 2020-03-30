// forEach does not break on return, there are ugly solutions to get this work but I suggest not to use it, instead try to use Array.prototype.some or Array.prototype.every

function test() {
  [1, 2, 3].forEach(v => {
    if (v > 1) {
      // break;
      // illegal break
      return;
    }
    console.log(v);
  });
}

test();
