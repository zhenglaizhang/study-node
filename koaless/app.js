// only cares about logic
// no koa releated code
module.exports = {
  "/detail": async () => {
    // rpc, Promise.all([...])
    // render
    return "detail page";
  },

  "/list": async () => {
    return "list page";
  }
};
