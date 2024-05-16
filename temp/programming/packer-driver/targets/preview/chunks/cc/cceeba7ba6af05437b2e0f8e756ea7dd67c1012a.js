System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default0, _URL, _DNS, __cjsMetaURL;

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
        exports.default = _default;
        exports.URL = exports.DNS = void 0;

        var _stringify = _interopRequireDefault(require("./stringify.js"));

        var _parse = _interopRequireDefault(require("./parse.js"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }

        function stringToBytes(str) {
          str = unescape(encodeURIComponent(str)); // UTF8 escape

          var bytes = [];

          for (var i = 0; i < str.length; ++i) {
            bytes.push(str.charCodeAt(i));
          }

          return bytes;
        }

        var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
        exports.DNS = DNS;
        var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
        exports.URL = URL;

        function _default(name, version, hashfunc) {
          function generateUUID(value, namespace, buf, offset) {
            if (typeof value === 'string') {
              value = stringToBytes(value);
            }

            if (typeof namespace === 'string') {
              namespace = (0, _parse.default)(namespace);
            }

            if (namespace.length !== 16) {
              throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
            } // Compute hash of namespace and value, Per 4.3
            // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
            // hashfunc([...namespace, ... value])`


            var bytes = new Uint8Array(16 + value.length);
            bytes.set(namespace);
            bytes.set(value, namespace.length);
            bytes = hashfunc(bytes);
            bytes[6] = bytes[6] & 0x0f | version;
            bytes[8] = bytes[8] & 0x3f | 0x80;

            if (buf) {
              offset = offset || 0;

              for (var i = 0; i < 16; ++i) {
                buf[offset + i] = bytes[i];
              }

              return buf;
            }

            return (0, _stringify.default)(bytes);
          } // Function#name is not settable on some platforms (#270)


          try {
            generateUUID.name = name; // eslint-disable-next-line no-empty
          } catch (err) {} // For CommonJS default export support


          generateUUID.DNS = DNS;
          generateUUID.URL = URL;
          return generateUUID;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _URL = module.exports.URL;
        _DNS = module.exports.DNS;
      }, () => ({
        './stringify.js': _req,
        './parse.js': _req0
      }));
    }
  };
});
//# sourceMappingURL=cceeba7ba6af05437b2e0f8e756ea7dd67c1012a.js.map