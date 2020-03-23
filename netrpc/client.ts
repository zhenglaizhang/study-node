import * as net from "net";

const socket = new net.Socket({});

socket.connect({ host: "127.0.0.1", port: 4000 });

setInterval(() => {
  socket.write("good night!");
}, 1000);
