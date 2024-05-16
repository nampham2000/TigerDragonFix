System.register(["__unresolved_0", "crypto"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_crypto2) {
      _req = _crypto2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = rng;

        var _crypto = _interopRequireDefault(require("crypto"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }

        var rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

        var poolPtr = rnds8Pool.length;

        function rng() {
          if (poolPtr > rnds8Pool.length - 16) {
            _crypto.default.randomFillSync(rnds8Pool);

            poolPtr = 0;
          }

          return rnds8Pool.slice(poolPtr, poolPtr += 16);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        'crypto': _req
      }));
    }
  };
});
//# sourceMappingURL=2541908ff3a42ee34b110af02605ac3590c409f7.js.map