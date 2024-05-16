System.register(["__unresolved_0", "webidl-conversions", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, _is, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_webidlConversions) {
      _req = _webidlConversions.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req1 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        const conversions = require("webidl-conversions");

        const utils = require("./utils.js");

        const Impl = require(".//URL-impl.js");

        const impl = utils.implSymbol;

        function URL(url) {
          if (!this || this[impl] || !(this instanceof URL)) {
            throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
          }

          if (arguments.length < 1) {
            throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
          }

          const args = [];

          for (let i = 0; i < arguments.length && i < 2; ++i) {
            args[i] = arguments[i];
          }

          args[0] = conversions["USVString"](args[0]);

          if (args[1] !== undefined) {
            args[1] = conversions["USVString"](args[1]);
          }

          module.exports.setup(this, args);
        }

        URL.prototype.toJSON = function toJSON() {
          if (!this || !module.exports.is(this)) {
            throw new TypeError("Illegal invocation");
          }

          const args = [];

          for (let i = 0; i < arguments.length && i < 0; ++i) {
            args[i] = arguments[i];
          }

          return this[impl].toJSON.apply(this[impl], args);
        };

        Object.defineProperty(URL.prototype, "href", {
          get() {
            return this[impl].href;
          },

          set(V) {
            V = conversions["USVString"](V);
            this[impl].href = V;
          },

          enumerable: true,
          configurable: true
        });

        URL.prototype.toString = function () {
          if (!this || !module.exports.is(this)) {
            throw new TypeError("Illegal invocation");
          }

          return this.href;
        };

        Object.defineProperty(URL.prototype, "origin", {
          get() {
            return this[impl].origin;
          },

          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL.prototype, "protocol", {
          get() {
            return this[impl].protocol;
          },

          set(V) {
            V = conversions["USVString"](V);
            this[impl].protocol = V;
          },

          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL.prototype, "username", {
          get() {
            return this[impl].username;
          },

          set(V) {
            V = conversions["USVString"](V);
            this[impl].username = V;
          },

          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL.prototype, "password", {
          get() {
            return this[impl].password;
          },

          set(V) {
            V = conversions["USVString"](V);
            this[impl].password = V;
          },

          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL.prototype, "host", {
          get() {
            return this[impl].host;
          },

          set(V) {
            V = conversions["USVString"](V);
            this[impl].host = V;
          },

          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL.prototype, "hostname", {
          get() {
            return this[impl].hostname;
          },

          set(V) {
            V = conversions["USVString"](V);
            this[impl].hostname = V;
          },

          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL.prototype, "port", {
          get() {
            return this[impl].port;
          },

          set(V) {
            V = conversions["USVString"](V);
            this[impl].port = V;
          },

          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL.prototype, "pathname", {
          get() {
            return this[impl].pathname;
          },

          set(V) {
            V = conversions["USVString"](V);
            this[impl].pathname = V;
          },

          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL.prototype, "search", {
          get() {
            return this[impl].search;
          },

          set(V) {
            V = conversions["USVString"](V);
            this[impl].search = V;
          },

          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL.prototype, "hash", {
          get() {
            return this[impl].hash;
          },

          set(V) {
            V = conversions["USVString"](V);
            this[impl].hash = V;
          },

          enumerable: true,
          configurable: true
        });
        module.exports = {
          is(obj) {
            return !!obj && obj[impl] instanceof Impl.implementation;
          },

          create(constructorArgs, privateData) {
            let obj = Object.create(URL.prototype);
            this.setup(obj, constructorArgs, privateData);
            return obj;
          },

          setup(obj, constructorArgs, privateData) {
            if (!privateData) privateData = {};
            privateData.wrapper = obj;
            obj[impl] = new Impl.implementation(constructorArgs, privateData);
            obj[impl][utils.wrapperSymbol] = obj;
          },

          interface: URL,
          expose: {
            Window: {
              URL: URL
            },
            Worker: {
              URL: URL
            }
          }
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _is = module.exports.is;
      }, () => ({
        'webidl-conversions': _req,
        './utils.js': _req0,
        './/URL-impl.js': _req1
      }));
    }
  };
});
//# sourceMappingURL=b8636359aadbbe0dd95c62a6f1b707adf761b12c.js.map