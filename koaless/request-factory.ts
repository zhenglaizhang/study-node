import { request } from "http";
import * as protobuf from "protocol-buffers";

function factory(config) {
  config.before = config.before || (d => d);
  config.then = config.then || (d => d);
  config.after = config.after(d => d);
  requestors[config.protocol].compile(config);

  return function(data) {
    data = config.before(data);
    return requestors[config.protocol]
      .request(data)
      .then(config.then)
      .catch(config.catch);
  };
}

const requestors = {};
factory.registerProtocol = function(protocol, requestor) {
  requestor[protocol] = requestor;
};
module.exports = factory;
