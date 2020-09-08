var config = require("./config");
var keosd = require("./keosd");

class keosdjs {
  constructor(options) {
    this.options = Object.assign({
      endpoint: config.endpoint,
      version: config.version
    }, options);
  }

  create(name, callback) {
    keosd.create(name, this.options, callback);
  }

  open(name, pwd, callback) {
    keosd.open(name, pwd, this.options, callback);
  }

  lock(name, callback) {
    keosd.lock(name, this.options, callback);
  }

  lock_all(callback) {
    keosd.lock_all(this.options, callback);
  }

  unlock(name, pwd, callback) {
    keosd.unlock(name, pwd, this.options, callback);
  }

  import_key(name, prvKey, callback) {
    keosd.import_key(name, prvKey, this.options, callback);
  }

  list_wallets(callback) {
    keosd.list_wallets(this.options, callback);
  }

  list_keys(name, pwd, callback) {
    keosd.list_keys(name, pwd, this.options, callback);
  }

  get_public_keys(callback) {
    keosd.get_public_keys(this.options, callback);
  }

  set_timeout(second, callback) {
    keosd.set_timeout(second, this.options, callback);
  }

  sign_transaction(transaction, pubKeys, chainId, callback) {
    keosd.sign_transaction(transaction, pubKeys, chainId, this.options, callback);
  }

  create_key(name, type, callback) {
    keosd.create_key(name, type, this.options, callback);
  }

  // sign_digest(callback) {
  //   keosd.sign_digest(this.options, callback);
  // }
  }
module.exports = keosdjs;