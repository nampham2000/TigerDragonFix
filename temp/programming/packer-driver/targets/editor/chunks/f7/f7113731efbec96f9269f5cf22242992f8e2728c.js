System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function getToken() {
    const token = localStorage.getItem("key");
    return token;
  }

  _export("getToken", getToken);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "174e6gtehRBypP6Bhe8pzVC", "Constant", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7113731efbec96f9269f5cf22242992f8e2728c.js.map