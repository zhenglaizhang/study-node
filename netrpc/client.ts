import * as net from "net";

const socket = new net.Socket({});

socket.connect({ host: "127.0.0.1", port: 4000 });

const ids = [1, 2, 3];
let idx = Math.floor(Math.random() * ids.length);

// packet id, to support full-duplex communication
const buffer = encode(idx);
socket.write(buffer);

socket.on("data", buffer => {
  const seqBuffer = buffer.slice(0, 2);
  buffer = buffer.slice(2);
  console.log(`get ${seqBuffer.readInt16BE()}: ${buffer.toString()}`);
  let idx = Math.floor(Math.random() * ids.length);
  console.log("send ", ids[idx], buffer.toString());
  buffer = encode(idx);
  socket.write(buffer);
});

let seq = 0;
function encode(index: number): Buffer {
  const buffer = Buffer.alloc(6);
  buffer.writeInt16BE(seq++);
  buffer.writeInt32BE(ids[index], 2);
  return buffer;
}
