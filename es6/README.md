### Iterable

- built-in iterable: array, string, map, set
- iterable implements `@@iterator` method
- adhere to the Iterator protocol
- returns an object of `{value: any, done: boolean} type`
- `Symbol.iterator`
- `for..of` iterates over VALUES, only works with iterable objects
- `for..in` iterates over enumerable properties

### Generator

- Yield Actions
  - Send a value to the iterator: `yield "goes to iterator"`
  - Receive a value from the iterator: `const x = yield;`
    - `it.next("value for x")` then x is now "value for x"
