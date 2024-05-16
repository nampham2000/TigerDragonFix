System.register(["__unresolved_0", "util", "uuid"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _jsonSchema, _fromString, _empty, _isUuid, _regex, _uuid, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_util) {
      _req = _util.__cjsMetaURL;
    }, function (_uuid2) {
      _req0 = _uuid2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.jsonSchema = exports.fromString = exports.empty = exports.isUuid = exports.regex = exports.uuid = void 0;

        var util_1 = require("util");

        var uuid_1 = require("uuid");

        var regex = {
          v4: /(?:^[0-9a-f]{8}\x2D[0-9a-f]{4}\x2D4[0-9a-f]{3}\x2D[0-9a-f]{4}\x2D[0-9a-f]{12}$)|(?:^0{8}\x2D0{4}\x2D0{4}\x2D0{4}\x2D0{12}$)/,
          v5: /(?:^[0-9a-f]{8}\x2D[0-9a-f]{4}\x2D5[0-9a-f]{3}\x2D[0-9a-f]{4}\x2D[0-9a-f]{12}$)|(?:^0{8}\x2D0{4}\x2D0{4}\x2D0{4}\x2D0{12}$)/
        };
        exports.regex = regex;
        var jsonSchema = {
          v4: {
            type: 'string',
            pattern: regex.v4.toString().slice(1, -2)
          },
          v5: {
            type: 'string',
            pattern: regex.v5.toString().slice(1, -2)
          }
        };
        exports.jsonSchema = jsonSchema;
        var uuidv4 = (0, util_1.deprecate)(() => (0, uuid_1.v4)(), 'uuidv4() is deprecated. Use v4() from the uuid module instead.');
        exports.uuid = uuidv4;
        var isUuid = (0, util_1.deprecate)(value => (0, uuid_1.validate)(value) && ((0, uuid_1.version)(value) === 4 || (0, uuid_1.version)(value) === 5), 'isUuid() is deprecated. Use validate() from the uuid module instead.');
        exports.isUuid = isUuid;
        var empty = (0, util_1.deprecate)(() => uuid_1.NIL, 'empty() is deprecated. Use NIL from the uuid module instead.');
        exports.empty = empty;
        var fromString = (0, util_1.deprecate)(function (text, namespace) {
          if (namespace === void 0) {
            namespace = 'bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45';
          }

          return (0, uuid_1.v5)(text, namespace);
        }, 'fromString() is deprecated. Use v5() from the uuid module instead.');
        exports.fromString = fromString; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _jsonSchema = module.exports.jsonSchema;
        _fromString = module.exports.fromString;
        _empty = module.exports.empty;
        _isUuid = module.exports.isUuid;
        _regex = module.exports.regex;
        _uuid = module.exports.uuid;
      }, () => ({
        'util': _req,
        'uuid': _req0
      }));
    }
  };
});
//# sourceMappingURL=67dd7bdf482b37a971f1f39fbd80f29e73fdb4ea.js.map