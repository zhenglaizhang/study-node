import * as net from "net";

const data = {
  1: "one",
  2: "two",
  3: "three"
};

const server = net.createServer(socket => {
  socket.on("data", buffer => {
    const seq = buffer.slice(0, 2);
    const id = buffer.readInt32BE(2);
    buffer.write(data[id]);
    setTimeout(() => {
      socket.write(Buffer.concat([seq, buffer]));
    }, 1000);
  });
});

server.listen(4000);
