// import * as _ from "lodash";

const _ = require("lodash");
let obj = {
  prop1: "hello",
  prop2: "world",
  setProp(propName, val) {
    const rv = _.deepClone(this); // to fix
    rv[propName] = val;
    Object.freeze(rv);
    return rv;
  }
};

// NO!
obj.prop1 = "world";

// YES
// Must return new object
obj = obj.setProp("prop1", "new value");
