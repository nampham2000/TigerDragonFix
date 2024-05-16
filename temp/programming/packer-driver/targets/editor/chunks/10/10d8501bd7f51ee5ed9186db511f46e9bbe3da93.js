System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
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

        var _validate = _interopRequireDefault(require("./validate.js"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }

        function parse(uuid) {
          if (!(0, _validate.default)(uuid)) {
            throw TypeError('Invalid UUID');
          }

          let v;
          const arr = new Uint8Array(16); // Parse ########-....-....-....-............

          arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
          arr[1] = v >>> 16 & 0xff;
          arr[2] = v >>> 8 & 0xff;
          arr[3] = v & 0xff; // Parse ........-####-....-....-............

          arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
          arr[5] = v & 0xff; // Parse ........-....-####-....-............

          arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
          arr[7] = v & 0xff; // Parse ........-....-....-####-............

          arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
          arr[9] = v & 0xff; // Parse ........-....-....-....-############
          // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

          arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
          arr[11] = v / 0x100000000 & 0xff;
          arr[12] = v >>> 24 & 0xff;
          arr[13] = v >>> 16 & 0xff;
          arr[14] = v >>> 8 & 0xff;
          arr[15] = v & 0xff;
          return arr;
        }

        var _default = parse;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        './validate.js': _req
      }));
    }
  };
});
//# sourceMappingURL=10d8501bd7f51ee5ed9186db511f46e9bbe3da93.js.map