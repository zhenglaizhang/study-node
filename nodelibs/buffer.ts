const buffer1 = Buffer.from("zhenglai");
const buffer2 = Buffer.from([1, 2, 3, 4]);
const buffer3 = Buffer.alloc(20);

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);

// <Buffer 7a 68 65 6e 67 6c 61 69>
// <Buffer 01 02 03 04>
// <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>

buffer2.writeInt8(12, 1);
console.log(buffer2);
// <Buffer 01 0c 03 04>
buffer2.writeInt16BE(512, 2);
console.log(buffer2);
// <Buffer 01 0c 02 00>
