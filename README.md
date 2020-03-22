### Node.js

- Node.js arch
- https://nodejs.org/en/docs/
- How node call os bindings, to check node code
  - `internalBinding('os')` -> v8 engine -> cpp -> libuv
  - `node/lib` & `node/src/node_os.cc`
  - getCPUs()
- `EventEmitter`
  - Observer pattern: `addEventListener` & `removeEventListener`
  - direct call vs publish event
    - publisher does not need to know if subscriber exists
    - publisher can contiune even if none subscriber exists
    - events might be less reliable

#### Async

- Event Loop
- Non-blocking IO
  - avoid non-necessary waiting
- Promise
  - `pending`
  - `fulfilled` | `resolved`
  - `rejected`
  - solve the callback hell transformed to nearly linear call
  - `Promise.all([])`

### Tooling

- node
- vs code
- npm
  - `npm init -y`
  - package.json
  - npm registry mirror: http://npm.taobao.org/
  - `npm install -g cnpm --registry=https://registry.npm.taobao.org`
  - https://docs.npmjs.com
  - npm event-stream story
- webpack

### How browser loads scripts

- By `<script/>` tag
- Hard to manage load order manually if there are many scripts
- Only one way to use global variables reuse logic between scripts, e.g. `$` in Jquery; global vars leads to great pain
- For env with no html?

### CommonJS module spec

- Initial for Node.js, expanding to browser side

### TODO

- [ ] Override `module.exports`
