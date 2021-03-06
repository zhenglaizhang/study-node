import * as ejs from "ejs";
import * as vm from "vm";
const user = {
  name: "<script/>"
};

const result = `<h2>${user.name}</h2>`;
console.log(result);

const templateMap = {
  templateA: "`<h2>${include('templateB')}</h2>`",
  templateB: "`<p>templateBcontent</p>`" // fs.readFileSync(...)
} as any;

Object.keys(templateMap).forEach(key => {
  const temp = templateMap[key];
  templateMap[key] = vm.runInNewContext(
    `(function() {return ${temp};})`,
    context
  );
});

const context = {
  user,
  include: function(name) {
    // use fs.readFileSync then include the content, or some toy demo
    // return templateMap[name]();
    return templateMap[name]();
  },
  helper: function() {},
  _: function(markup) {
    if (!markup) return "";
    return String(markup)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/'/g, "&#39;")
      .replace(/"/g, "&quot;");
    1;
  }
};

const result2 = vm.runInNewContext(
  "`<h2>${_(user.name)}</h2><h1>h1><h1>${include('templateB')}</h1>`",
  context
);
console.log(result2);

// const template = "<h2><%= user.name %></h2>";
// const result3 = ejs.render(template, user, {});
// console.log(result3);
