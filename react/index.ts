require("@babel/register")({
  presets: ["@babel/preset-react"]
});

const ReactDOMServer = require("react-dom/server");

const res = ReactDOMServer.renderToString(require("./index.jsx"));
console.log(res);
