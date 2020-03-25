import * as EasySock from "easy_sock";
import * as protobuf from "protocol-buffers";
import * as fs from "fs";

const schemas = protobuf(
  fs.readFileSync(`${__dirname}/pb/detail.proto`)
) as any;
const easySock = new EasySock({
  ip: "127.0.0.1",
  port: 4000,
  timeout: 500,
  keepAlive: true
}) as any;

easySock.encode = (data, seq) => {
  const body = schemas.ColumnRequest.encode(data);
  const head = Buffer.alloc(8);
  head.writeInt32BE(seq);
  head.writeInt32BE(body.length, 4);
  return Buffer.concat([head, body]);
};

easySock.decode = function(buffer) {
  const seq = buffer.readInt32BE();
  const body = schemas.ColumnResponse.decode(buffer.slice(8));

  return {
    result: body,
    seq
  };
};
easySock.isReceiveComplete = function(buffer) {
  if (buffer.length < 8) {
    return 0;
  }
  const bodyLength = buffer.readInt32BE(4);

  if (buffer.length >= bodyLength + 8) {
    return bodyLength + 8;
  } else {
    return 0;
  }
};

module.exports = easySock;
