// only cares about logic
// no koa releated code

const requestFactory = require("./request-factory");
requestFactory.registerProtocol("rpc", require("./requestors/rpc"));
requestFactory.registerProtocol("http", require("./requestors/http"));

module.exports = {
  "/detail": {
    data: async () => {
      // rpc, Promise.all([...])
      // render
      return "detail page";
    },
    render: function(data) {}
  },

  "/list": {
    data: async () => {
      return "list page";
    },
    render: function(data) {}
  }
};
