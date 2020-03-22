const EventEmitter = require("events").EventEmitter;

class MyEventEmitter extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit("newlesson", { wow: Math.random() * 100 });
    }, 3000);
  }
}

const emitter = new MyEventEmitter();
module.exports = emitter;
