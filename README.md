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
