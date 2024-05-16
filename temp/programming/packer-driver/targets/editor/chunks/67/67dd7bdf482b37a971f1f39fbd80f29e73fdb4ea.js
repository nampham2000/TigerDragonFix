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

        const util_1 = require("util");

        const uuid_1 = require("uuid");

        const regex = {
          v4: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u,
          v5: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u
        };
        exports.regex = regex;
        const jsonSchema = {
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
        const uuidv4 = (0, util_1.deprecate)(() => (0, uuid_1.v4)(), 'uuidv4() is deprecated. Use v4() from the uuid module instead.');
        exports.uuid = uuidv4;
        const isUuid = (0, util_1.deprecate)(value => (0, uuid_1.validate)(value) && ((0, uuid_1.version)(value) === 4 || (0, uuid_1.version)(value) === 5), 'isUuid() is deprecated. Use validate() from the uuid module instead.');
        exports.isUuid = isUuid;
        const empty = (0, util_1.deprecate)(() => uuid_1.NIL, 'empty() is deprecated. Use NIL from the uuid module instead.');
        exports.empty = empty;
        const fromString = (0, util_1.deprecate)((text, namespace = 'bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45') => (0, uuid_1.v5)(text, namespace), 'fromString() is deprecated. Use v5() from the uuid module instead.');
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