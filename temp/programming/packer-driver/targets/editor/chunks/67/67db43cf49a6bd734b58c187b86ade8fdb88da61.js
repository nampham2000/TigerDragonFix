System.register(["__unresolved_0", "node-fetch"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _fetch, _Headers, _Request, _Response, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_nodeFetch) {
      _req = _nodeFetch.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        const nodeFetch = require('node-fetch');

        const realFetch = nodeFetch.default || nodeFetch;

        const fetch = function (url, options) {
          // Support schemaless URIs on the server for parity with the browser.
          // Ex: //github.com/ -> https://github.com/
          if (/^\/\//.test(url)) {
            url = 'https:' + url;
          }

          return realFetch.call(this, url, options);
        };

        fetch.ponyfill = true;
        module.exports = exports = fetch;
        exports.fetch = fetch;
        exports.Headers = nodeFetch.Headers;
        exports.Request = nodeFetch.Request;
        exports.Response = nodeFetch.Response; // Needed for TypeScript consumers without esModuleInterop.

        exports.default = fetch; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _fetch = module.exports.fetch;
        _Headers = module.exports.Headers;
        _Request = module.exports.Request;
        _Response = module.exports.Response;
        _default = module.exports.default;
      }, () => ({
        'node-fetch': _req
      }));
    }
  };
});
//# sourceMappingURL=67db43cf49a6bd734b58c187b86ade8fdb88da61.js.map