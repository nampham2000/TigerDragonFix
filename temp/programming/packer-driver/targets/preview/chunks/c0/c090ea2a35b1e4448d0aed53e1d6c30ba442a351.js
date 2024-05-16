System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function getToken() {
    var token = localStorage.getItem("key");
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
//# sourceMappingURL=c090ea2a35b1e4448d0aed53e1d6c30ba442a351.js.map