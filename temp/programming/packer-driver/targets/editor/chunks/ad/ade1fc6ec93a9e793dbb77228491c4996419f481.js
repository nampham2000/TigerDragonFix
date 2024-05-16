System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, Controller;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfColyseus(extras) {
    _reporterNs.report("Colyseus", "db://colyseus-sdk/colyseus.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClient(extras) {
    _reporterNs.report("Client", "appwrite", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b2427fiLbpHdJ92GImVnljA", "Controller", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Controller", Controller = (_dec = ccclass("Controller"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class Controller extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ResBtn", _descriptor, this);

          _initializerDefineProperty(this, "LoginBtn", _descriptor2, this);

          _initializerDefineProperty(this, "LoginTable", _descriptor3, this);

          _initializerDefineProperty(this, "ResTable", _descriptor4, this);

          _initializerDefineProperty(this, "ResBtnTb", _descriptor5, this);

          _initializerDefineProperty(this, "LoginBtnTb", _descriptor6, this);

          this.client = void 0;
          this.room = void 0;
        }

        // private appwriteClient = new sdk.Client()
        //   .setEndpoint("https://adroit-appwrite.our-projects.org/v1") // Your API Endpoint
        //   .setProject("6604076a003c15f4a892"); // Your project ID
        // private db = new sdk.Databases(this.appwriteClient);
        start() {}

        update(deltaTime) {}

        async creatAcc() {// const account = new Account(client);
          // const promise = account.create(null, "nampham@gmail.com", "123");
          // promise.then(
          //   function (response) {
          //     console.log(response); // Success
          //   },
          //   function (error) {
          //     console.log(error); // Failure
          //   }
          // );
        }

        offLoginTable() {
          this.LoginTable.active = false;
          this.LoginBtnTb.active = false;
        }

        onLoginTable() {
          this.LoginTable.active = true;
          this.LoginBtnTb.active = true;
        }

        offResTable() {
          this.ResTable.active = false;
          this.ResBtnTb.active = false;
        }

        onResTable() {
          this.ResTable.active = true;
          this.ResBtnTb.active = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ResBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "LoginBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "LoginTable", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ResTable", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ResBtnTb", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "LoginBtnTb", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ade1fc6ec93a9e793dbb77228491c4996419f481.js.map