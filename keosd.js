var util = require("./util");
var code = require("./errcode");

function create(name, options, callback) {
  util.call("create", name, options, callback);
}

function open(name, pwd, options, callback) {
  util.call("open", [name, pwd], options, callback);
}

function lock(name, options, callback) {
  util.call("lock", name, options, callback);
}

function lock_all(options, callback) {
  util.call("lock_all", [], options, callback);
}

function unlock(name, pwd, options, callback) {
  util.call("unlock", [name, pwd], options, (err, result) => {
    if (err && err.code === code.ignore.AlreadyUnlocked) {
      return callback(null, {});
    }
    callback(err, result);
  });
}

function import_key(name, prvKey, options, callback) {
  util.call("import_key", [name, prvKey], options, callback);
}

function list_wallets(options, callback) {
  util.call("list_wallets", [], options, callback);
}

function list_keys(name, pwd, options, callback) {
  util.call("list_keys", [name, pwd], options, callback);
}

function get_public_keys(options, callback) {
  util.call("get_public_keys", [], options, callback);
}

function set_timeout(second, options, callback) {
  util.call("set_timeout", second, options, callback);
}

function sign_transaction(transaction, pubKeys, chainId, options, callback) {
  util.call("sign_transaction", [transaction, pubKeys, chainId], options, callback);
}

function create_key(name, type, options, callback) {
  util.call("create_key", [name, type], options, callback);
}

// function sign_digest(options, callback) {
//   util.call("sign_digest", [], options, callback);
// }

module.exports = {
  create,
  open,
  lock,
  lock_all,
  unlock,
  import_key,
  list_wallets,
  list_keys,
  get_public_keys,
  set_timeout,
  sign_transaction,
  create_key,
  // sign_digest
};
