## V8 GC

- young & old generation
- memory leak
- Chrom DevTool to spot GC issues, take multiple snapshots

### Perf testing

- `apache bench` or `webbench`
- `sudo apt install apache2-utils`
- `ab -c300 -n10000 "http://localhost:3000/?query={comment{name}}"`
- find perf bottleneck `top` or `iostat`
- it's common that cpu is bottleneck since js string processing
- reduce computation work under node

### Node perf

- `node --prof index.js` & `node --prof-process aa.log > profile.txt`
- `node --inspect-brk index.js` & `chrome://inspect` & profiling
- https://www.npmjs.com/package/clinic

### Frontend & Backend

- share same template redering logic, for SEO & dynamic
- env specific logic & data specific logic should be seperated
- data specific logic could be reused by frontend & backend
- `next.js` & `axios`

### GraphQL

- `npm i graphql`
- For data aggregation and let frontend determine what data they want to query

### Express

- https://github.com/expressjs/express/wiki
- https://github.com/expressjs/generator
- https://npmjs.com/package/express
  - Robust routing
  - Focus on high performance
  - Super-high test coverage
  - HTTP helpers (redirection, caching, etc)
  - View system supporting 14+ template engines
  - Content negotiation
  - Executable for generating applications quickly
- onion model for middleware
  - raising problems if async function call inside middlewares

### Koa

- https://npmjs.com/package/koa
- not bundled with any middleware
- support stack-like middleware
- support async function call in middleware
- micro-kernel

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

### vm

- https://odino.org/eval-no-more-understanding-vm-vm2-nodejs/
- `vm.runInNewContext` vs `eval`

#### Buffer

- Big/Little Edian
- https://github.com/protocolbuffers/protobuf
- https://www.npmjs.com/package/protocol-buffers

### RPC

- simplex
- half-duplex
- full-duplex
- TCP sticky bag

### Template engine

- include sub-template
- xss filtering, teampate helper method
- high performance implementation through ES6 str

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
- `async` sugar for promise
  - await to pause an async function execution
  - await a promise to wait for its result
  - simplify the error handling, try catch a await promised error

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

### Useful package

```
npm i -g httpserver
```

### TODO

- [ ] Override `module.exports`
- [ ] Node.js internals
- [ ] Express logic
- [ ] Express middleware internals - onion model
  - `next()` is blocking, take care, may lead high latency and wrong result
- [ ] Koa
- [ ] XSS, CSRF
