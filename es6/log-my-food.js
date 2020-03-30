#! /usr/bin/env node

// chmod +x log-my-food.js

const axios = require("axios");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`What would you like to log today? `, async item => {
  const { data } = await axios.get("http://localhost:3001/food");
  const it = data[Symbol.iterator]();
  let pos = it.next();
  while (!pos.done) {
    const food = pos.value.name;
    if (food === item) {
      console.log(`${item} has ${pos.value.calories} calories`);
    }
    pos = it.next();
  }
  readline.close();
});
