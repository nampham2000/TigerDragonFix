System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
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

        var _rng = _interopRequireDefault(require("./rng.js"));

        var _stringify = _interopRequireDefault(require("./stringify.js"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }

        function v4(options, buf, offset) {
          options = options || {};

          var rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


          rnds[6] = rnds[6] & 0x0f | 0x40;
          rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

          if (buf) {
            offset = offset || 0;

            for (var i = 0; i < 16; ++i) {
              buf[offset + i] = rnds[i];
            }

            return buf;
          }

          return (0, _stringify.default)(rnds);
        }

        var _default = v4;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        './rng.js': _req,
        './stringify.js': _req0
      }));
    }
  };
});
//# sourceMappingURL=6fe9b9446c03aee1ab25a97886c83394fd9b5e96.js.map