import * as fs from "fs";
import * as vm from "vm";

const templateCache = {};

const templateContext = vm.createContext({
  include: (name, data) => {
    const tpl = templateCache[name] || createTemplate(name);
    return tpl;
  }
});

function createTemplate(templatePath) {
  templateCache[templatePath] = vm.runInNewContext(
    `(function (data) {
      with (data) {
        return \`${fs.readFileSync(templatePath, "utf-8")}\`
      }
  })`,
    templateContext
  );
  return templateCache[templatePath];
}

module.exports = createTemplate;
