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
//# sourceMappingURL=367aed5aa1f86bfa5ff8b841c7d2b334f5dbecde.js.map