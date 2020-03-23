import * as net from "net";

const socket = new net.Socket({});

socket.connect({ host: "127.0.0.1", port: 4000 });

const ids = [1, 2, 3];
let idx = Math.floor(Math.random() * ids.length);
let buffer = Buffer.alloc(4);
buffer.writeInt32BE(ids[idx]);
socket.write(buffer);

socket.on("data", buffer => {
  console.log("get ", buffer.toString());
  console.log("send ", ids[idx], buffer.toString());
  buffer = Buffer.alloc(4);
  idx = Math.floor(Math.random() * ids.length);
  buffer.writeInt32BE(ids[idx]);
  socket.write(buffer);
});
