System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Animation, director, EditBox, Button, input, Input, KeyCode, Colyseus, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _crd, ccclass, property, loggedInUserSession, NetworkConnect;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfColyseus(extras) {
    _reporterNs.report("Colyseus", "db://colyseus-sdk/colyseus.js", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Animation = _cc.Animation;
      director = _cc.director;
      EditBox = _cc.EditBox;
      Button = _cc.Button;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
    }, function (_unresolved_2) {
      Colyseus = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9de53gRG/ZM/5hJ9OJJyrkW", "Connect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite', 'SpriteFrame', 'tween', 'Vec3', 'Animation', 'director', 'EditBox', 'Button', 'input', 'Input', 'EventKeyboard', 'KeyCode']);

      ({
        ccclass,
        property
      } = _decorator);
      // import { AudioController } from "./AudioController";
      // import { Chip } from "./Chip";
      loggedInUserSession = null;

      _export("NetworkConnect", NetworkConnect = (_dec = ccclass("NetworkConnect"), _dec2 = property({
        type: String
      }), _dec3 = property({
        type: Number
      }), _dec4 = property({
        type: Boolean
      }), _dec5 = property(EditBox), _dec6 = property(EditBox), _dec7 = property(EditBox), _dec8 = property(EditBox), _dec9 = property(EditBox), _dec10 = property(Node), _dec11 = property(Animation), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Animation), _dec16 = property(Animation), _dec17 = property(Button), _dec18 = property(Button), _dec19 = property(Button), _dec20 = property(Label), _dec(_class = (_class2 = class NetworkConnect extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "hostname", _descriptor, this);

          _initializerDefineProperty(this, "port", _descriptor2, this);

          _initializerDefineProperty(this, "useSSL", _descriptor3, this);

          _initializerDefineProperty(this, "boxNameRes", _descriptor4, this);

          _initializerDefineProperty(this, "boxNameLogin", _descriptor5, this);

          _initializerDefineProperty(this, "boxPassLogin", _descriptor6, this);

          _initializerDefineProperty(this, "boxPassRes", _descriptor7, this);

          _initializerDefineProperty(this, "boxRePassRes", _descriptor8, this);

          _initializerDefineProperty(this, "LoadingPageProcess", _descriptor9, this);

          _initializerDefineProperty(this, "loadingAnimProject", _descriptor10, this);

          _initializerDefineProperty(this, "ResTable", _descriptor11, this);

          _initializerDefineProperty(this, "LoginTable", _descriptor12, this);

          _initializerDefineProperty(this, "ResBtnTb", _descriptor13, this);

          _initializerDefineProperty(this, "WarnRes", _descriptor14, this);

          _initializerDefineProperty(this, "WarnEmail", _descriptor15, this);

          _initializerDefineProperty(this, "LoginBtn", _descriptor16, this);

          _initializerDefineProperty(this, "ResBtn", _descriptor17, this);

          _initializerDefineProperty(this, "LoginBtnactive", _descriptor18, this);

          _initializerDefineProperty(this, "warnLb", _descriptor19, this);

          this.isKeyPressHandled = false;
          // @property({
          //   type: Chip,
          // })
          // private chipNode: Chip;
          this.client = void 0;
          this.room = void 0;
        }

        // private async login(email: string, password: string) {
        //   try {
        //     //   // Gửi thông tin đăng nhập đến phòng Colyseus
        //     let response = await fetch(
        //       "https://adroit-appwrite.our-projects.org/v1/account/sessions/email",
        //       {
        //         method: "POST",
        //         headers: {
        //           "Access-Control-Allow-Origin": "*",
        //           "Content-Type": "application/json",
        //           "X-Appwrite-Response-Format": "1.5.0",
        //           "X-Appwrite-Project": "game-provider",
        //         },
        //         body: JSON.stringify({
        //           email,
        //           password,
        //         }),
        //       }
        //     );
        //     let headers = response.headers;
        //     const cookies = headers.get("x-fallback-cookies");
        //     const cookiesObject = JSON.parse(cookies);
        //     const sessionValue = cookiesObject["a_session_game-provider"];
        //     console.log(cookiesObject);
        //     localStorage.setItem("Token", sessionValue);
        //     this.LoadingPageProcess.active = true;
        //     this.loadingAnimProject.play();
        //     this.moveToGameScene();
        //   } catch (error) {
        //     console.error("Error:", error);
        //     this.showErrorMessage("Incorrect email or password");
        //   }
        // }
        login(email, password) {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              // Gửi thông tin đăng nhập đến phòng Colyseus
              var response = yield fetch("https://adroit-appwrite.our-projects.org/v1/account/sessions/email", {
                method: "POST",
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                  "X-Appwrite-Response-Format": "1.5.0",
                  "X-Appwrite-Project": "game-provider"
                },
                body: JSON.stringify({
                  email,
                  password
                })
              });

              if (!response.ok) {
                throw new Error("Incorrect username or password");
              }

              var headers = response.headers;
              var cookies = headers.get("x-fallback-cookies");
              var cookiesObject = JSON.parse(cookies);
              var sessionValue = cookiesObject["a_session_game-provider"];
              console.log(cookiesObject);
              localStorage.setItem("Token", sessionValue);
              _this.LoadingPageProcess.active = true;

              _this.loadingAnimProject.play();

              _this.moveToGameScene();
            } catch (error) {
              console.error("Error:", error);
              throw new Error("Incorrect username or password");
            }
          })();
        }

        Signup(email, password, name) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!email || !password || !name) {
              _this2.WarnEmail.play("WarningEmail");

              return;
            }

            try {
              // Gửi thông tin đăng nhập đến phòng Colyseus
              var response = yield fetch("https://adroit-appwrite.our-projects.org/v1/account", {
                method: "POST",
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                  "X-Appwrite-Response-Format": "1.5.0",
                  "X-Appwrite-Project": "game-provider"
                },
                body: JSON.stringify({
                  userId: _this2.generateUUID(),
                  email: email,
                  password: password,
                  name: name
                })
              });

              if (response.ok) {
                if (_this2.ResTable && _this2.ResBtnTb) {
                  _this2.ResTable.active = false;
                  _this2.ResBtnTb.active = false;

                  _this2.WarnRes.play();
                }
              } else {
                _this2.warnLb.string = "Account already exists";

                _this2.WarnEmail.play();
              }
            } catch (error) {
              _this2.warnLb.string = "Account already exists";

              _this2.WarnEmail.play();
            }
          })();
        }

        generateUUID() {
          var d = new Date().getTime();
          var uuid = "xxxxxxxxxxxxxxxyxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
          });
          return uuid;
        }

        moveToGameScene() {
          // Chuyển đến scene chơi game
          director.loadScene("Game");
        }

        onKeyDown(event) {
          if (this.isKeyPressHandled) return;

          switch (event.keyCode) {
            case KeyCode.ENTER:
              // If the signup form is active, attempt to sign up
              if (this.ResTable && this.ResTable.active === true) {
                var email = this.boxNameRes.string;
                var password = this.boxPassRes.string;
                var name = this.boxRePassRes.string;
                this.signUp(email, password, name);
                this.isKeyPressHandled = true;
                this.scheduleOnce(() => {
                  this.isKeyPressHandled = false;
                }, 4);
              }

              if (this.LoginTable && this.LoginTable.active) {}

              break;
          }
        }

        loginBtn() {
          var username = this.boxNameLogin.string;
          var password = this.boxPassLogin.string; // Kiểm tra username và password không được để trống

          if (!username) {
            this.warnLb.string = " Email, password must not be empty";
            this.WarnEmail.play();
            return;
          }

          if (!password) {
            this.warnLb.string = " Email, password must not be empty";
            this.WarnEmail.play();
            return;
          } // Thực hiện đăng nhập


          this.login(username, password).catch(error => {
            this.warnLb.string = "Incorrect username or password";
            this.WarnEmail.play();
          });
          this.LoginBtnactive.node.active = true;
          setTimeout(() => {
            this.LoginBtnactive.node.active = false;
          }, 3000);
        }

        signUp(email, password, name) {
          email = this.boxNameRes.string;
          password = this.boxPassRes.string;
          name = this.boxRePassRes.string;

          if (!email) {
            this.warnLb.string = " Email, password, and name must not be empty";
            this.WarnEmail.play();
            return;
          }

          if (!password) {
            this.warnLb.string = " Email, password, and name must not be empty";
            this.WarnEmail.play();
            return;
          }

          if (!name) {
            this.warnLb.string = " Email, password, and name must not be empty";
            this.WarnEmail.play();
            return;
          } // Kiểm tra email hợp lệ


          if (!this.isValidEmail(email)) {
            this.warnLb.string = "Invalid email address";
            this.WarnEmail.play();
            return;
          } // Kiểm tra độ dài mật khẩu


          if (password.length < 8) {
            this.warnLb.string = "Password must be at least 8 characters long";
            this.WarnEmail.play();
            return;
          } // Thực hiện đăng ký


          this.Signup(email, password, name);
          this.ResBtn.node.active = true;
          setTimeout(() => {
            this.ResBtn.node.active = false;
          }, 3000);
        }

        isValidEmail(email) {
          var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailPattern.test(email);
        } // Phương thức để xử lý kết quả đăng nhập từ server
        // private handleLoginResponse(response: any) {
        //   if (response.success) {
        //     // Nếu đăng nhập thành công, chuyển đến scene game
        //     this.moveToGameScene();
        //   } else {
        //     // Nếu đăng nhập thất bại, hiển thị thông báo lỗi
        //     this.showErrorMessage("Incorrect email or password");
        //   }
        // }


        start() {
          // Khởi tạo kết nối đến Colyseus và gọi phương thức connect
          this.client = new (_crd && Colyseus === void 0 ? (_reportPossibleCrUseOfColyseus({
            error: Error()
          }), Colyseus) : Colyseus).Client((this.useSSL ? "wss" : "ws") + "://" + this.hostname + ":" + this.port);
          var uuid = this.generateUUID();
          var checkToken = localStorage.getItem("key");

          if (checkToken) {
            this.LoadingPageProcess.active = true;
            this.loadingAnimProject.play();
            this.moveToGameScene();
          } else {}

          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this); // this.connect();
        }

        connect() {// try {
          // this.client.auth.token =
          //   "eyJpZCI6IjY2MWUyNmFmMDAzOWVjOGFhNDc1Iiwic2VjcmV0IjoiNjQ2MTQ5N2U0YjNiY2I3ODUwM2VjZmZhZmJiMWI2ZmJjNTViNmYwNWM5MTJkYmYxMDIxYzY5YWY3Mjc1MTU5NDkyNzk0Y2ZjMTE5OTU4OTRhYTJjZWViYWZmZDZlZjQxZmQ4ODNiMDQ1NmVkMmQzNzU4YmY3OGI3MjRmYWNjN2MxNzVjNzFkNDU1ZDlhZmM1OTNiMjQwMDBiMDVkNDYyMzZjMzBhYTM4MWVmZTM4ZWVlMDU5OTVmMDYwMTkwMTk3ODMxOGI0OWIxYjIwYjg0ZDMyODVkMGQyMzA2ZmY0NWMyNzk0MjdmZjkzZmNmYzdmYTNiMjAyNzE1MTQ4ZDE3YiJ9";
          // // this.client.joinOrCreate("room1").then((room) => {
          // //   console.log(room);
          // // });
          // // Kết nối đến Colyseus và tham gia vào phòng
          // const rooms = await this.client.getAvailableRooms("room1");
          // if (rooms.length === 0) {
          //   this.room = await this.client.create("room1");
          //   // console.log("Created new room with sessionId:", this.room.sessionId);
          // } else {
          //   // // Nếu có phòng có sẵn, tham gia vào phòng đầu tiên trong danh sách
          //   this.room = await this.client.joinById(rooms[0].roomId);
          //   console.log(
          //     "Joined existing room with sessionId:",
          //     this.room.sessionId
          //   );
          //   }
          //   console.log("Joined successfully!");
          //   console.log("User's sessionId:", this.room.sessionId);
          //   this.room.onMessage("loginResult", (message) => {
          //     if (message) {
          //       console.log(message);
          //       // this.LoadingNode.active = true;
          //       localStorage.setItem("key", message.secret);
          //       console.log(message);
          //       this.moveToGameScene();
          //     } else {
          //       console.log("Not define");
          //     }
          //   });
          // } catch (e) {
          //   console.error("Error:", e);
          // }

          return _asyncToGenerator(function* () {})();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hostname", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "localhost";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "port", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 80;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useSSL", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "boxNameRes", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "boxNameLogin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "boxPassLogin", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "boxPassRes", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "boxRePassRes", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "LoadingPageProcess", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "loadingAnimProject", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "ResTable", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "LoginTable", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "ResBtnTb", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "WarnRes", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "WarnEmail", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "LoginBtn", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "ResBtn", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "LoginBtnactive", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "warnLb", [_dec20], {
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
//# sourceMappingURL=bce485f5f8d372ab066f9ad120c42cba32dc7bee.js.map