import * as net from "net";

const data = {
  1: "one",
  2: "two",
  3: "three"
};

const server = net.createServer(socket => {
  socket.on("data", buffer => {
    const id = buffer.readInt32BE();
    buffer.write(data[id]);
    setTimeout(() => {
      socket.write(buffer);
    }, 1000);
  });
});

server.listen(4000);
