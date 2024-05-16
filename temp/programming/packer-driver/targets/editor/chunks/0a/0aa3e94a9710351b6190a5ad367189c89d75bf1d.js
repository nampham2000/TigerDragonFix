System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, director, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Controller;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Animation = _cc.Animation;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de371MweHlLQoGbimaG0AdW", "Controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Controller", Controller = (_dec = ccclass("Controller"), _dec2 = property(Animation), _dec(_class = (_class2 = class Controller extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "LogoAnim", _descriptor, this);
        }

        start() {
          this.LogoAnim.on(Animation.EventType.FINISHED, () => {
            director.loadScene("Login");
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "LogoAnim", [_dec2], {
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
//# sourceMappingURL=0aa3e94a9710351b6190a5ad367189c89d75bf1d.js.map