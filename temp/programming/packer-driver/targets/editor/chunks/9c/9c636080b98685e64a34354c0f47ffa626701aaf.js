System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, _mixin, _wrapperSymbol, _implSymbol, _wrapperForImpl, _implForWrapper, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        module.exports.mixin = function mixin(target, source) {
          const keys = Object.getOwnPropertyNames(source);

          for (let i = 0; i < keys.length; ++i) {
            Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
          }
        };

        module.exports.wrapperSymbol = Symbol("wrapper");
        module.exports.implSymbol = Symbol("impl");

        module.exports.wrapperForImpl = function (impl) {
          return impl[module.exports.wrapperSymbol];
        };

        module.exports.implForWrapper = function (wrapper) {
          return wrapper[module.exports.implSymbol];
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _mixin = module.exports.mixin;
        _wrapperSymbol = module.exports.wrapperSymbol;
        _implSymbol = module.exports.implSymbol;
        _wrapperForImpl = module.exports.wrapperForImpl;
        _implForWrapper = module.exports.implForWrapper;
      }, {});
    }
  };
});
//# sourceMappingURL=9c636080b98685e64a34354c0f47ffa626701aaf.js.map