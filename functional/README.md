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
  -
- Closure
