const eventLoop = {
  queue: [],
  timeoutqueue: [],
  fsqueue: [],
  loop() {
    while (this.queue.length) {
      const callback = this.queue.shift();
      console.log(callback);
      callback();
    }

    setTimeout(this.loop.bind(this), 50);
  },
  add(callback) {
    this.queue.push(callback);
  }
};

eventLoop.loop();

// submit the timeout event to event loop
// so the call stack are seperated
setTimeout(() => {
  eventLoop.add(() => {
    console.log(1);
  });
}, 500);

setTimeout(() => {
  eventLoop.add(() => {
    console.log(2);
  });
}, 800);
