# Node.js Message Form and Chat App — Refactored

## Run
```bash
node app.js
```
Open http://localhost:3000.

## Three CommonJS export styles (test one pair at a time)

### 1. Export the function directly
`routes.js`: `module.exports = routeHandler;`
`app.js`: `const routeHandler = require("./routes");`

### 2. Export an object property
`routes.js`: `module.exports = { routeHandler };`
`app.js`: `const { routeHandler } = require("./routes");`

### 3. Use the exports alias
`routes.js`: `exports.routeHandler = routeHandler;`
`app.js`: `const { routeHandler } = require("./routes");`

After changing export style, update the matching import in `app.js`, save both files, then run `node app.js`. Do not mix styles.

`exports.routeHandler = routeHandler` works because `exports` initially refers to `module.exports`; assigning `exports = ...` alone does not change the exported module.
