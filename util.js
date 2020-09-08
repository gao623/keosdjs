var request = require("request");
var {
  endpoint,
  version,
  method,
  headers
}  = require("./config");

module.exports.call = function (func, args, options, callback) {
  if (typeof(options) === "function") {
    callback = options;
    options = {};
  }
  if (!options || typeof(options) !== "object") {
    options = {};
  }
  endpoint = options.endpoint || endpoint;
  version = options.version || version;

  var options = {
    method: method.POST,
    url: endpoint + version + func,
    headers: headers,
    body: JSON.stringify(args)
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    let result = JSON.parse(body);
    if (result.error) {
      callback(result.error, null);
    } else {
      callback(null, result);
    }
  });
}
