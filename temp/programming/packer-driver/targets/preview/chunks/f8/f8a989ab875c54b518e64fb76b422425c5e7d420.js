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
        /**
         * Convert array of 16 byte values to UUID string format of the form:
         * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
         */


        var byteToHex = [];

        for (var i = 0; i < 256; ++i) {
          byteToHex.push((i + 0x100).toString(16).substr(1));
        }

        function stringify(arr, offset) {
          if (offset === void 0) {
            offset = 0;
          }

          // Note: Be careful editing this code!  It's been tuned for performance
          // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
          var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
          // of the following:
          // - One or more input array values don't map to a hex octet (leading to
          // "undefined" in the uuid)
          // - Invalid input values for the RFC `version` or `variant` fields

          if (!(0, _validate.default)(uuid)) {
            throw TypeError('Stringified UUID is invalid');
          }

          return uuid;
        }

        var _default = stringify;
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
//# sourceMappingURL=f8a989ab875c54b518e64fb76b422425c5e7d420.js.map