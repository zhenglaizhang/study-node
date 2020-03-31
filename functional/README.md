## Why

- Predictable (pure/immutable)
- Modular (composability)
- Safe (side effect free)

## Functional

- Pure
  - No side effects
  - Same output
  - No external dependencies
  - Seperation of caculation and mutation
  - Always returns _something_ (not undefined or null)
  - Highly testable
- Composition
  - Functions as building blocks, they are small and reusable
  - Process / Machine
  - Functions do one thing
  - Functions named for that thing
  - Function chained (so not return undefined or null)
- Higher-order functions
  - Functions as parameters
  - Return a function
- Currying
  - `func[1..n] -> func[1..n](1)`
  - Partial application vs currying
- Immutable
  - create a new instance with updates
  - convert checking value equality to reference equality, thus boost performance
- Closure
  - Lexical scoping
- https://github.com/fantasyland/fantasy-land

### Functor

- Can be **mapped**
- `myFunctor.map(fn)`

### Monad

- Type of functor
- Container
- In/Out, provide some wrap to process the value
- `Promises/Observables` are Monadic or Monad-like
- `Maybe/Either`

### How to select a lib

- Fit the needs or situation
- Functionality
- Fresh or Mature
- Activity
  - Commits
  - Issues
- Iteroperability
- Documentation
- None are bad, different strengths or weakness, subjective

#### immutable.js

- https://github.com/immutable-js/immutable-js
- https://immutable-js.github.io/immutable-js/
- http://untangled.io/ (unofficial doc)
- Stengths
  - Guarantees immutability
  - Performance (structual sharing by reusing as much as possible)
  - Great for state management (Redux/ngRx)
- Weaknes
  - Converting strutures to/from javascript structures
  - Learning curve
  - Non-standard syntax (get/set)
  - Documentation
- Mental model
  - Think of Immutable data as a value, e.g like a number
    - we can think of the collection’s push() method, which adds an item to an existing collection, as being equivalent to an addition operation on a number, which adds a new value to an existing number. In both cases, the original value – the collection and the number – are left completely unchanged, and a new value is returned.
  - Think of Immutable data as representing the state of data
    - Think of it as the state of its data at the specific point in time that the collection was created.
    - Any operation you perform on the data within an Immutable collection (e.g. add or remove an item) will change the state of that data **at a later point in time**, but the state of the data as it existed before the operation remains unchanged
    - It’s the difference between asking “Who is the President of the United States right now” – which obviously depends on when you ask the question – and “Who was the President of the United States on August 13th 2016” – which is a fact that will never change.

### Ramda

- https://ramdajs.com/
- Features
  - Immutability
  - Automatic currying
  - Side-effect free
  - Data-last
- the API is king, we sacrifice a great deal of implementation elegance for even a slightly cleaner API
- strives for performance. A reliable and quick implementation wins over any notations of functional purity
- Strength
  - Breadth
  - Focus
  - Consistency
  - Team
- Weakness
  - Learning curve
  - Documentation
  - Missing Elements
- `compose`: R => L
- `pipe`: L => R
