System.register(["__unresolved_0", "crypto"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
        exports.default = void 0;

        var _crypto = _interopRequireDefault(require("crypto"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }

        function md5(bytes) {
          if (Array.isArray(bytes)) {
            bytes = Buffer.from(bytes);
          } else if (typeof bytes === 'string') {
            bytes = Buffer.from(bytes, 'utf8');
          }

          return _crypto.default.createHash('md5').update(bytes).digest();
        }

        var _default = md5;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        'crypto': _req
      }));
    }
  };
});
//# sourceMappingURL=6969d3a98841a47025c0afa5c96675e337f03e24.js.map