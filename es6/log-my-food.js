#! /usr/bin/env node

// chmod +x log-my-food.js

const axios = require("axios");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "enter command > "
});

readline.prompt();
readline.on("line", async line => {
  switch (line.trim()) {
    case "list vegan foods":
      {
        axios.get("htto://localhost:3001/food").then(({ data }) => {
          let idx = 0;
          const veganOnly = data.filter(food => {
            return food.dietary_preferences.includes("vegan");
          });
          const veganIterable = {
            [Symbol.iterator]() {
              return {
                [Symbol.iterator]() {
                  return this;
                },
                next() {
                  const cur = veganOnly[idx];
                  idx++;
                  if (cur) {
                    return { value: cur, done: false };
                  } else {
                    return { value: undefined, done: true };
                  }
                }
              };
            }
          };
          for (const vegan of veganIterable) {
            console.log(vegan.name);
          }

          readline.prompt();
        });
      }
      break;
    case "eat":
      const { data } = await axios.get("http://localhost:3001/food");
      const it = data[Symbol.iterator]();
      const actionIterator = {
        [Symbol.iterator]() {
          const positions = [...this.actions];
          return {
            [Symbol.iterator]() {
              return this;
            },
            next(...args) {
              if (positions.length > 0) {
                const pos = positions.shift();
                const res = pos(...args);
                return { value: res, done: false };
              } else {
                return { done: true };
              }
            }
          };
        },
        actions: [askForServingSize, displayCalories]
      };
      readline.question(`What would you like to log today? `, async item => {
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
  }
});
