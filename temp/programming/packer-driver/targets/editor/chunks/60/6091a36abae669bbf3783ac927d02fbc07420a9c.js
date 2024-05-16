System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, tween, Vec3, Animation, SpriteFrame, Sprite, Graphics, Color, instantiate, Prefab, Button, AudioSource, Chip, NetworkConnect, AudioController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfChip(extras) {
    _reporterNs.report("Chip", "./Chip", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkConnect(extras) {
    _reporterNs.report("NetworkConnect", "./NetworkConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioController(extras) {
    _reporterNs.report("AudioController", "./AudioController", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Button = _cc.Button;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      Chip = _unresolved_2.Chip;
    }, function (_unresolved_3) {
      NetworkConnect = _unresolved_3.NetworkConnect;
    }, function (_unresolved_4) {
      AudioController = _unresolved_4.AudioController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8ab5YQ3ZZPeJeVYhhzn+bz", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'tween', 'Vec3', 'Animation', 'SpriteFrame', 'Sprite', 'math', 'log', 'Graphics', 'Color', 'instantiate', 'Prefab', 'Button', 'CCInteger', 'AudioSource', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass("GameController"), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Label
      }), _dec7 = property({
        type: Label
      }), _dec8 = property({
        type: Label
      }), _dec9 = property({
        type: _crd && Chip === void 0 ? (_reportPossibleCrUseOfChip({
          error: Error()
        }), Chip) : Chip
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Node
      }), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Node
      }), _dec17 = property({
        type: Node
      }), _dec18 = property({
        type: Node
      }), _dec19 = property({
        type: Node
      }), _dec20 = property({
        type: Node
      }), _dec21 = property({
        type: Node
      }), _dec22 = property({
        type: Node
      }), _dec23 = property({
        type: Node
      }), _dec24 = property({
        type: Node
      }), _dec25 = property({
        type: Node
      }), _dec26 = property({
        type: Node
      }), _dec27 = property({
        type: Node
      }), _dec28 = property({
        type: Node
      }), _dec29 = property({
        type: Node
      }), _dec30 = property({
        type: AudioSource
      }), _dec31 = property({
        type: Animation
      }), _dec32 = property({
        type: Animation
      }), _dec33 = property({
        type: Animation
      }), _dec34 = property({
        type: Animation
      }), _dec35 = property({
        type: Animation
      }), _dec36 = property({
        type: Animation
      }), _dec37 = property({
        type: Animation
      }), _dec38 = property({
        type: SpriteFrame
      }), _dec39 = property({
        type: SpriteFrame
      }), _dec40 = property({
        type: SpriteFrame
      }), _dec41 = property({
        type: SpriteFrame
      }), _dec42 = property({
        type: SpriteFrame
      }), _dec43 = property(Node), _dec44 = property(Node), _dec45 = property(Prefab), _dec46 = property(Prefab), _dec47 = property(Prefab), _dec48 = property({
        type: Node
      }), _dec49 = property({
        type: Node
      }), _dec50 = property({
        type: Node
      }), _dec51 = property({
        type: Label
      }), _dec52 = property({
        type: Label
      }), _dec53 = property({
        type: SpriteFrame
      }), _dec54 = property({
        type: [Button]
      }), _dec55 = property(_crd && NetworkConnect === void 0 ? (_reportPossibleCrUseOfNetworkConnect({
        error: Error()
      }), NetworkConnect) : NetworkConnect), _dec56 = property({
        type: _crd && AudioController === void 0 ? (_reportPossibleCrUseOfAudioController({
          error: Error()
        }), AudioController) : AudioController
      }), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "betTigerLb", _descriptor, this);

          _initializerDefineProperty(this, "betDragonLb", _descriptor2, this);

          _initializerDefineProperty(this, "betTieLb", _descriptor3, this);

          _initializerDefineProperty(this, "UserName", _descriptor4, this);

          _initializerDefineProperty(this, "BalancerLb", _descriptor5, this);

          _initializerDefineProperty(this, "totalUserBet", _descriptor6, this);

          _initializerDefineProperty(this, "NameHost", _descriptor7, this);

          _initializerDefineProperty(this, "chipNode", _descriptor8, this);

          _initializerDefineProperty(this, "CardNodeL", _descriptor9, this);

          _initializerDefineProperty(this, "CardNodeR", _descriptor10, this);

          _initializerDefineProperty(this, "AvatarNode", _descriptor11, this);

          _initializerDefineProperty(this, "AvatarNode1", _descriptor12, this);

          _initializerDefineProperty(this, "AvatarNode2", _descriptor13, this);

          _initializerDefineProperty(this, "AvatarNode3", _descriptor14, this);

          _initializerDefineProperty(this, "AvatarL1", _descriptor15, this);

          _initializerDefineProperty(this, "AvatarL2", _descriptor16, this);

          _initializerDefineProperty(this, "AvatarL3", _descriptor17, this);

          _initializerDefineProperty(this, "AvatarL4", _descriptor18, this);

          _initializerDefineProperty(this, "AvatarL5", _descriptor19, this);

          _initializerDefineProperty(this, "AvatarL6", _descriptor20, this);

          _initializerDefineProperty(this, "GridL", _descriptor21, this);

          _initializerDefineProperty(this, "GridR", _descriptor22, this);

          _initializerDefineProperty(this, "ValueAnim", _descriptor23, this);

          _initializerDefineProperty(this, "avaliablebet", _descriptor24, this);

          _initializerDefineProperty(this, "scroll", _descriptor25, this);

          _initializerDefineProperty(this, "ValueAnim1", _descriptor26, this);

          _initializerDefineProperty(this, "ValueAnim2", _descriptor27, this);

          _initializerDefineProperty(this, "loadingPage", _descriptor28, this);

          _initializerDefineProperty(this, "loadingAudio", _descriptor29, this);

          _initializerDefineProperty(this, "CardNodeAnim", _descriptor30, this);

          _initializerDefineProperty(this, "WinNotice", _descriptor31, this);

          _initializerDefineProperty(this, "DragonWinintro", _descriptor32, this);

          _initializerDefineProperty(this, "DragonNode", _descriptor33, this);

          _initializerDefineProperty(this, "TigerNode", _descriptor34, this);

          _initializerDefineProperty(this, "StartBet", _descriptor35, this);

          _initializerDefineProperty(this, "ExplosionDra", _descriptor36, this);

          _initializerDefineProperty(this, "listCardRes", _descriptor37, this);

          _initializerDefineProperty(this, "listCardResHeart", _descriptor38, this);

          _initializerDefineProperty(this, "listCardResclubs", _descriptor39, this);

          _initializerDefineProperty(this, "listCardResdiamonds", _descriptor40, this);

          _initializerDefineProperty(this, "bankCard", _descriptor41, this);

          _initializerDefineProperty(this, "pref", _descriptor42, this);

          _initializerDefineProperty(this, "prefL", _descriptor43, this);

          _initializerDefineProperty(this, "Over", _descriptor44, this);

          _initializerDefineProperty(this, "Under", _descriptor45, this);

          _initializerDefineProperty(this, "Tie", _descriptor46, this);

          // private countDownLb: Label;
          _initializerDefineProperty(this, "ToatalAv", _descriptor47, this);

          _initializerDefineProperty(this, "ToatalUser", _descriptor48, this);

          _initializerDefineProperty(this, "PayUser", _descriptor49, this);

          _initializerDefineProperty(this, "BalanceList", _descriptor50, this);

          _initializerDefineProperty(this, "TotalBetLB", _descriptor51, this);

          _initializerDefineProperty(this, "PayUserSprite", _descriptor52, this);

          _initializerDefineProperty(this, "listCancelBet", _descriptor53, this);

          _initializerDefineProperty(this, "NetworkConnect", _descriptor54, this);

          _initializerDefineProperty(this, "AudioController", _descriptor55, this);

          this.UserBetTigerIcon = 0;
          this.UserBetDragonIcon = 0;
          this.UserBetTieIcon = 0;
          this.clonePosCardL = new Vec3();
          this.clonePosCardR = new Vec3();
          this.randomValueCardR = 0;
          this.randomValueCardL = 0;
          this.balanceUser = 300;
          this.currentCol = 0;
          this.currentRow = 0;
          this.currentRowClone = 0;
          this.currentColL = 0;
          this.currentRowL = 0;
          this.previousPrefabType = null;
          this.previousPrefabTypeL = null;
          this.winIntroType = void 0;
          this.numRows = 6;
          this.numCols = 20;
          this.cellWidth = 27;
          this.cellHeight = 30;
          this.countdownTimerBet = 30;
          this.cloneBalance = 0;
          this.GameEnd = false;
          this.GameStateStart = false;
          this.GameStateIdle = false;
          this.GameStateReuslt = false;
          this.GameStateFight = false;
          this.GameStatePayOut = false;
          this.GameStateStopBet = false;
          this.checkSateCurrent = false;
          this.checkBettedTiger = false;
          this.checkBettedDragon = false;
          this.checkBettedTie = false;
          this.loggedInUsername = void 0;
          this.sessionId = void 0;
          this.currentHostName = void 0;
          this.assignUserName = false;
          this.assignHostName = false;
          this.spriteFrame = void 0;
          this.spriteFrameR = void 0;
          this.log3 = void 0;
        }

        onLoad() {
          this.clonePosCardL = this.CardNodeL.position.clone();
          this.clonePosCardR = this.CardNodeR.position.clone();
          this.shuffelCard();
          this.drawRectangle();
          this.drawRectangle1();
          this.drawRectangle2();
          this.drawRectangle3();
          this.drawRectangleTotalUser(0);
          this.drawRectangleTotalUser(1);
          this.drawRectangleTotalUser(2);
          this.drawRectanglel(this.AvatarL1);
          this.drawRectanglel(this.AvatarL2);
          this.drawRectanglel(this.AvatarL3);
          this.drawRectanglel(this.AvatarL4);
          this.drawRectanglel(this.AvatarL5);
          this.drawRectanglel(this.AvatarL6);
          this.drawGrid(this.GridL);
          this.drawGrid(this.GridR);
          this.drawRectangleTotal(0);
          this.drawRectangleTotal(1);
          this.drawRectangleTotal(2);
          this.AudioController.settingAudio(0);
        }

        update(deltaTime) {
          // this.BalancerLb.string = this.NetworkConnect.TotalBalanceUser;
          // console.log(this.NetworkConnect.TotalBalanceUser);
          // this.NetworkConnect.room.balance
          if (this.NetworkConnect.balanceUser) {
            if (this.assignUserName === false) {
              this.sessionId = this.NetworkConnect.room.state.players.get(this.NetworkConnect.room.sessionId);
              console.log(this.sessionId);
              this.assignUserName = true;
            }

            this.BalancerLb.string = this.sessionId.balance;
            this.TotalBetLB[0].string = this.NetworkConnect.betTiger.toString();
            this.TotalBetLB[1].string = this.NetworkConnect.betDragon.toString();
            this.TotalBetLB[2].string = this.NetworkConnect.betTie.toString();
            this.totalUserBet[0].string = this.NetworkConnect.totaluserBetTiger.toString();
            this.totalUserBet[1].string = this.NetworkConnect.totaluserBetDragon.toString();
            this.totalUserBet[2].string = this.NetworkConnect.totaluserBetTie.toString();
          }

          if (this.NetworkConnect.room && this.NetworkConnect.room.sessionId !== undefined) {
            this.UserName.string = this.sessionId.displayName;
          }

          this.currentHostName = this.NetworkConnect.room.state.players.get(this.NetworkConnect.currentHost).displayName;

          if (this.NetworkConnect.room && this.NetworkConnect.room.sessionId === this.NetworkConnect.currentHost) {
            this.chipNode.node.active = false;
            this.avaliablebet.active = true;
            this.scroll.getComponent(Sprite).color = new Color(104, 104, 104, 230);
            this.NameHost.string = this.currentHostName;
          } else {
            this.chipNode.node.active = true;
            this.avaliablebet.active = false;
            this.scroll.getComponent(Sprite).color = new Color(255, 255, 255, 255);
            this.NameHost.string = this.currentHostName;
          }

          if (this.NetworkConnect.gameState === "idle" && this.GameStateIdle === false) {
            this.NetworkConnect.room.send("getHistories");
            this.NetworkConnect.room.onMessage("histories", message => {
              console.log("History", message.documents[0].result);
              console.log("History", message.documents[0].result2);
              this.createGridNot(message.documents);
            });
            this.RestartBalnce();
            this.checkSateCurrent = true;
            this.UserName.string = this.NetworkConnect.room.sessionId;
            this.Idle();
            this.GameEnd = false;
            this.GameStateIdle = true;
            this.GameStateReuslt = false;
            this.GameStateFight = false;
            this.GameStateStopBet = false;
          }

          if (this.NetworkConnect.gameState === "startBetting") {
            this.CardNodeAnim.node.active = false;
            this.CardNodeL.active = true;
            this.CardNodeR.active = true;
            this.checkSateCurrent = true;
          }

          if (this.NetworkConnect.gameState === "startBetting" && this.GameStateStart === false) {
            this.StartBet.node.active = true;
            this.StartBetting();
            this.NetworkConnect.room.send("getHistories");
            this.NetworkConnect.room.onMessage("histories", message => {
              console.log("History", message.documents[0].result);
              this.createGridNot(message.documents);
            });
            this.GameStateStart = true;
          }

          if (this.checkSateCurrent === true) {
            this.loadingPage.active = false;
            this.loadingAudio.volume = 0;
            this.AudioController.settingAudio(1);
          }

          if (this.NetworkConnect.gameState === "stopBetting" && this.GameStateStopBet === false) {
            this.GameStateStart = false;
            this.stopBetting();
            this.GameStateStopBet = true;
          }

          if (this.NetworkConnect.gameState === "fight" && this.GameStateFight === false) {
            this.fight();
            this.GameStateFight = true;
          }

          if (this.NetworkConnect.gameState === "showResult" && this.GameStateReuslt === false) {
            this.StartBet.node.active = false;
            this.shownResult();
            this.GameStateReuslt = true;
          }

          if (this.NetworkConnect.gameState === "payout" && this.GameStatePayOut === false) {
            for (let i = 0; i < this.NetworkConnect.ListLabel.length; i++) {
              this.NetworkConnect.ListLabel[i].node.removeAllChildren();
            } // this.createGridNot();
            // this.createGrid();


            this.GameStatePayOut = true;
          }

          if (this.cloneBalance > 0) {
            this.listCancelBet[0].node.active = true;
          } else {
            this.listCancelBet[0].node.active = false;
          }
        }

        addScore(Score, betLB, betValueIcon) {
          if (this.balanceUser >= Score) {
            betValueIcon = betValueIcon + Score;
            betLB.string = betValueIcon.toString();
          }
        }

        betTigerBtn() {
          if (this.balanceUser >= this.chipNode.UserBet && this.GameEnd === false && this.checkBettedDragon === false && this.checkBettedTie === false) {
            if (this.chipNode.UserBet !== 0) {
              this.checkBettedTiger = true;
              this.NetworkConnect.room.send("Bet", JSON.stringify({
                betAmount: this.chipNode.UserBet,
                betType: "Tiger"
              }));
              this.ToatalUser[2].active = true;
              this.addScore(this.chipNode.UserBet, this.betTigerLb, this.UserBetTigerIcon);
              this.UserBetTigerIcon += this.chipNode.UserBet;
              this.createSpriteNode(-406, 200, this.ValueAnim);
              this.listCancelBet[1].node.active = true;
            }

            this.AudioController.onAudio(8);
          }
        }

        betDragonBtn() {
          if (this.balanceUser >= this.chipNode.UserBet && this.GameEnd === false && this.checkBettedTiger === false && this.checkBettedTie === false) {
            if (this.chipNode.UserBet !== 0) {
              this.checkBettedDragon = true;
              this.NetworkConnect.room.send("Bet", JSON.stringify({
                betAmount: this.chipNode.UserBet,
                betType: "Dragon"
              }));
              this.addScore(this.chipNode.UserBet, this.betDragonLb, this.UserBetDragonIcon);
              this.UserBetDragonIcon += this.chipNode.UserBet;
              this.ToatalUser[0].active = true;
              this.listCancelBet[3].node.active = true;
              this.createSpriteNode(-951, 193, this.ValueAnim1);
            }

            this.PosBet();
            this.AudioController.onAudio(8);
          }
        }

        betTieBtn() {
          if (this.balanceUser >= this.chipNode.UserBet && this.GameEnd === false && this.checkBettedDragon === false && this.checkBettedTiger === false) {
            if (this.chipNode.UserBet !== 0) {
              this.checkBettedTie = true;
              this.NetworkConnect.room.send("Bet", JSON.stringify({
                betAmount: this.chipNode.UserBet,
                betType: "Tie"
              }));
              this.listCancelBet[2].node.active = true;
              this.createSpriteNode(-670, 221, this.ValueAnim2);
              this.ToatalUser[1].active = true;
              this.addScore(this.chipNode.UserBet, this.betTieLb, this.UserBetTieIcon);
              this.UserBetTieIcon += this.chipNode.UserBet;
            }

            this.AudioController.onAudio(8);
          }
        }

        shuffelCard() {
          tween(this.CardNodeL).to(0.4, {
            position: new Vec3(1, 70)
          }).call(() => {
            this.CardNodeL.active = false;
            this.CardNodeR.active = false;
            this.CardNodeAnim.node.active = true;
            this.AudioController.onAudio(0);
            this.RestartBalnce();
          }).start();
          tween(this.CardNodeR).to(0.4, {
            position: new Vec3(1, 70)
          }).start();
        }

        displayImages() {
          // Định nghĩa ánh xạ của các bộ bài tới các tài nguyên tương ứng
          const suitToResourceMap = {
            "1": this.listCardRes,
            "4": this.listCardResHeart,
            "2": this.listCardResclubs,
            "3": this.listCardResdiamonds
          };
          this.NetworkConnect.room.onMessage("result", message => {
            const cardList = suitToResourceMap[message.dragonCard.suit];

            if (cardList) {
              console.log(message.dragonCard.suit);
              this.spriteFrame = cardList[message.dragonCard.value - 1];
            } else {
              console.error("Unknown suit:", message.dragonCard.suit);
              return;
            } // Lấy component Sprite từ CardNodeL


            const spriteComponent = this.CardNodeL.getComponent(Sprite);

            if (spriteComponent) {
              // Gán trực tiếp spriteFrame cho component Sprite
              spriteComponent.spriteFrame = this.spriteFrame;
              console.log("SpriteFrame đã được gán");
            } else {
              console.error("Component Sprite bị thiếu trên CardNodeL!");
            }
          });
        }

        displayImagesCardR() {// const suitToResourceMap: { [key: string]: SpriteFrame[] } = {
          //   "1": this.listCardRes,
          //   "4": this.listCardResHeart,
          //   "2": this.listCardResclubs,
          //   "3": this.listCardResdiamonds,
          // };
          // this.NetworkConnect.room.onMessage(
          //   "result",
          //   (message: { tigerCard: { suit: string; value: number } }) => {
          //     const cardList: SpriteFrame[] | undefined =
          //       suitToResourceMap[message.tigerCard.suit];
          //     if (cardList) {
          //       this.spriteFrameR = cardList[message.tigerCard.value - 1];
          //     } else {
          //       console.error("Unknown suit:", message.tigerCard.suit);
          //       return;
          //     }
          //     const sprite = this.CardNodeR.getComponent(Sprite);
          //     if (sprite && this.spriteFrameR) {
          //       sprite.spriteFrame = this.spriteFrameR;
          //     } else {
          //       console.error("Sprite or SpriteFrame is missing!");
          //     }
          //   }
          // );
        }

        drawRectangle() {
          const width = 250;
          const height = 120;
          const graphics = this.AvatarNode.addComponent(Graphics);
          const lightGray = new Color(116, 116, 116, 100);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 5;
          graphics.roundRect(-width / 2, -height / 2, width, height, 10);
          graphics.fill();
          graphics.stroke();
        }

        drawRectangle1() {
          const width = 220;
          const height = 110;
          const graphics = this.AvatarNode1.addComponent(Graphics);
          const lightGray = new Color(116, 116, 116, 100);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 5;
          graphics.roundRect(-width / 2, -height / 2, width, height, 10);
          graphics.fill();
          graphics.stroke();
        }

        drawRectangle2() {
          const width = 220;
          const height = 110;
          const graphics = this.AvatarNode2.addComponent(Graphics);
          const lightGray = new Color(116, 116, 116, 100);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 5;
          graphics.roundRect(-width / 2, -height / 2, width, height, 10);
          graphics.fill();
          graphics.stroke();
        }

        drawRectangle3() {
          const width = 220;
          const height = 110;
          const graphics = this.AvatarNode3.addComponent(Graphics);
          const lightGray = new Color(116, 116, 116, 100);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 5;
          graphics.roundRect(-width / 2, -height / 2, width, height, 10);
          graphics.fill();
          graphics.stroke();
        }

        drawRectangleTotalUser(number) {
          const width = 60;
          const height = 20;
          const graphics = this.ToatalUser[number].addComponent(Graphics);
          const lightGray = new Color(0, 0, 0, 255);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 5;
          graphics.roundRect(-width / 2, -height / 2, width, height, 2);
          graphics.fill();
          graphics.stroke();
          const circleRadius = 10;
          graphics.fillColor = Color.WHITE; // Màu trắng

          graphics.strokeColor = Color.BLACK; // Viền màu đen

          graphics.circle(-20, 0, circleRadius); // Vẽ hình tròn tại tọa độ (0,0) với bán kính circleRadius

          graphics.fill(); // Tô màu

          graphics.stroke(); // Vẽ viền
        }

        drawRectangleTotal(list) {
          const width = 100;
          const height = 70;
          const graphics = this.ToatalAv[list].addComponent(Graphics);
          const lightGray = new Color(0, 0, 0, 255);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 1; // Tính toán các điểm để vẽ viên thuốc

          const centerX = 0;
          const centerY = 0;
          const pillHeight = height * 0.6; // Chiều cao của viên thuốc

          const pillWidth = width * 0.8; // Chiều rộng của viên thuốc

          const pillRadius = pillHeight / 2; // Bán kính của đầu viên thuốc

          const bodyWidth = width * 0.5; // Chiều rộng của phần thân viên thuốc
          // Vẽ phần thân của viên thuốc

          graphics.rect(centerX - bodyWidth / 2, centerY - pillRadius, bodyWidth, pillHeight); // Vẽ đầu viên thuốc bên trái

          graphics.arc(centerX - pillWidth / 2 + pillRadius, centerY, pillRadius, -Math.PI / 2, Math.PI / 2, false); // Vẽ đầu viên thuốc bên phải

          graphics.arc(centerX + pillWidth / 2 - pillRadius, centerY, pillRadius, Math.PI / 2, -Math.PI / 2, false);
          graphics.fill(); // Đổ màu

          graphics.stroke(); // Vẽ viền
        }

        drawRectanglel(Avatar) {
          const width = 220;
          const height = 100;
          const graphics = Avatar.addComponent(Graphics);
          const lightGray = new Color(116, 116, 116, 100);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 5;
          graphics.roundRect(-width / 2, -height / 2, width, height, 10);
          graphics.fill();
          graphics.stroke();
        }

        createSpriteNode(posX, posY, posNode) {
          // Kiểm tra xem chipNode và buttonPub đã được xác định chưa
          if (this.chipNode && this.chipNode.buttonPub) {
            const buttonNode = this.chipNode.buttonPub.node; // Kiểm tra xem buttonNode và spriteFrame có tồn tại không

            if (buttonNode && buttonNode.getComponent(Sprite)) {
              const buttonSpriteFrame = buttonNode.getComponent(Sprite).spriteFrame;
              const spriteNode = new Node("SpriteNode");
              spriteNode.scale = new Vec3(0.5, 0.5);
              const spriteComponent = spriteNode.addComponent(Sprite);
              spriteComponent.spriteFrame = buttonSpriteFrame;
              posNode.addChild(spriteNode);
              console.log("da chayyyyyyyyyyyyyyyyyy", buttonSpriteFrame); // Bắt đầu tween animation sau khi spriteNode đã được thêm vào posNode

              tween(spriteNode).to(0.3, {
                position: new Vec3(posX, posY)
              }).start();
            } else {
              console.error("Button node or sprite frame is undefined");
            }
          } else {
            return;
          }
        }

        drawGrid(Grid) {
          const numRows = this.numRows;
          const numCols = this.numCols;
          const gridSize = Math.min(575 / numCols, 200 / numRows); // Kích thước ô vuông

          const cellWidth = this.cellWidth; // Chiều rộng của mỗi ô

          const cellHeight = this.cellHeight; // Chiều cao của mỗi ô

          const graphics = Grid.addComponent(Graphics);
          const lightGray = new Color(116, 116, 116, 50);
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 4; // Vẽ các đường ngang

          for (let i = 0; i <= numRows; i++) {
            const y = i * cellHeight - numRows * cellHeight / 2; // Đặt lưới vào giữa theo chiều cao

            graphics.moveTo(-numCols * cellWidth / 2, y);
            graphics.lineTo(numCols * cellWidth / 2, y);
            graphics.stroke();
          }

          for (let j = 0; j <= numCols; j++) {
            const x = j * cellWidth - numCols * cellWidth / 2; // Đặt lưới vào giữa theo chiều rộng

            graphics.moveTo(x, -numRows * cellHeight / 2);
            graphics.lineTo(x, numRows * cellHeight / 2);
            graphics.stroke();
          } // Tô màu cho lưới


          graphics.fillColor = lightGray;
          graphics.rect(-numCols * cellWidth / 2, -numRows * cellHeight / 2, numCols * cellWidth, numRows * cellHeight);
          graphics.fill();
        }

        createGrid() {
          let prefabType;

          if (this.NetworkConnect.result === "Tie") {
            prefabType = this.Tie;
          } else if (this.NetworkConnect.result === "tigerWin") {
            prefabType = this.Under;
          } else if (this.NetworkConnect.result === "dragonWin") {
            prefabType = this.Over;
          }

          if (this.currentRowClone > 5 && prefabType.name !== this.previousPrefabType.name) {
            this.currentCol++; // this.currentRow = 0;

            if (this.currentCol >= this.numCols) {
              this.clearGrid();
              this.currentCol = 0;
            }
          }

          if (this.previousPrefabType !== null && prefabType.name !== this.previousPrefabType.name) {
            this.currentCol++;
            this.currentRow = 0;
            this.currentRowClone = 0;

            if (this.currentCol >= this.numCols) {
              this.clearGrid();
              this.currentCol = 0;
            }
          }

          const cell = instantiate(prefabType);
          const posX = this.currentCol * this.cellWidth;
          const posY = -this.currentRow * this.cellHeight;
          cell.position = new Vec3(posX, posY);
          this.pref.addChild(cell);
          this.previousPrefabType = prefabType;
          this.currentRowClone++;

          if (this.currentRow < 5) {
            this.currentRow++;
          }
        }

        clearGrid() {
          this.pref.removeAllChildren();
        } // private createGridNot() {
        //   let prefabType;
        //   if (this.NetworkConnect.result === "Tie") {
        //     prefabType = this.Tie;
        //   } else if (this.NetworkConnect.result === "tigerWin") {
        //     prefabType = this.Under;
        //   } else if (this.NetworkConnect.result === "dragonWin") {
        //     prefabType = this.Over;
        //   }
        //   if (this.currentRowL >= this.numRows) {
        //     this.currentColL++;
        //     this.currentRowL = 0;
        //     if (this.currentColL >= this.numCols) {
        //       this.clearGridNt();
        //       this.currentCol = 0;
        //     }
        //   }
        //   const cell = instantiate(prefabType);
        //   const posX = this.currentColL * this.cellWidth; // Tính vị trí x dựa trên chỉ mục cột hiện tại
        //   const posY = -this.currentRowL * this.cellHeight; // Tính vị trí y dựa trên chỉ mục hàng hiện tại
        //   cell.position = new Vec3(posX, posY);
        //   this.prefL.addChild(cell);
        //   this.currentRowL++;
        // }


        createGridNot(documents) {
          // Ánh xạ các giá trị với prefab tương ứng
          const prefabMap = {
            TigerWin: this.Under,
            DragonWin: this.Over,
            Tie: this.Tie
          };
          this.clearGridNt();
          this.currentRowL = 0;
          this.currentColL = 0; // this.currentCol = 0;
          // this.currentRowL = 0;

          for (const doc of documents[0].result) {
            const prefabType = prefabMap[doc];

            if (prefabType) {
              if (this.currentRowL >= this.numRows) {
                this.currentColL++;
                this.currentRowL = 0;

                if (this.currentCol >= this.numCols) {
                  this.clearGridNt();
                  this.currentCol = 0;
                }
              } // console.log("col", this.currentCol);


              const cell = instantiate(prefabType);
              const posX = this.currentColL * this.cellWidth;
              const posY = -this.currentRowL * this.cellHeight;
              cell.position = new Vec3(posX, posY);
              this.prefL.addChild(cell);
              this.currentRowL++;
            } else {
              console.error(`Prefab type not found for result: ${doc}`);
            }
          }
        }

        clearGridNt() {
          this.prefL.removeAllChildren();
        }

        startCountdown(timeCountDown, timereset) {
          this.countdownTimerBet = 30;
          const countdownInterval = setInterval(() => {
            this.countdownTimerBet--;

            if (this.countdownTimerBet <= 0) {
              clearInterval(countdownInterval);
            }
          }, 1000);
        }

        Cancel() {
          if (this.GameEnd === false) {
            this.ToatalUser[0].active = false;
            this.ToatalUser[1].active = false;
            this.ToatalUser[2].active = false;
            this.listCancelBet[0].node.active = false;
            this.listCancelBet[1].node.active = false;
            this.listCancelBet[2].node.active = false;
            this.listCancelBet[3].node.active = false;
            this.UserBetDragonIcon = 0;
            this.UserBetTieIcon = 0;
            this.UserBetTigerIcon = 0;
            this.balanceUser = this.balanceUser + this.cloneBalance;
            this.cloneBalance = 0;
            this.BalancerLb.string = this.balanceUser.toString();
            this.betDragonLb.string = this.UserBetDragonIcon.toString();
            this.betTigerLb.string = this.UserBetTigerIcon.toString();
            this.betTieLb.string = this.UserBetTieIcon.toString();
            this.ValueAnim.removeAllChildren();
            this.ValueAnim1.removeAllChildren();
            this.ValueAnim2.removeAllChildren();
          }

          this.AudioController.onAudio(7);
        }

        RestartBalnce() {
          this.checkBettedDragon = false;
          this.checkBettedTiger = false;
          this.checkBettedTie = false;
          this.ToatalUser[0].active = false;
          this.ToatalUser[1].active = false;
          this.ToatalUser[2].active = false;
          this.listCancelBet[0].node.active = false;
          this.listCancelBet[1].node.active = false;
          this.listCancelBet[2].node.active = false;
          this.listCancelBet[3].node.active = false;
          this.UserBetDragonIcon = 0;
          this.UserBetTieIcon = 0;
          this.UserBetTigerIcon = 0;
          this.cloneBalance = 0;
          this.betDragonLb.string = this.UserBetDragonIcon.toString();
          this.betTigerLb.string = this.UserBetTigerIcon.toString();
          this.betTieLb.string = this.UserBetTieIcon.toString();
          this.ValueAnim.removeAllChildren();
          this.ValueAnim1.removeAllChildren();
          this.ValueAnim2.removeAllChildren();
        }

        CancelBetTiger() {
          if (this.GameEnd === false) {
            this.NetworkConnect.room.send("cancel");
            this.checkBettedTiger = false;
            this.ToatalUser[2].active = false;
            this.listCancelBet[1].node.active = false;
            this.cloneBalance = this.cloneBalance - this.UserBetTigerIcon;
            this.balanceUser = this.balanceUser + this.UserBetTigerIcon;
            this.BalancerLb.string = this.balanceUser.toString();
            this.UserBetTigerIcon = 0;
            this.betTigerLb.string = this.UserBetTigerIcon.toString();
            this.ValueAnim.removeAllChildren();
          }

          this.AudioController.onAudio(7);
        }

        CancelBetDragon() {
          if (this.GameEnd === false) {
            this.NetworkConnect.room.send("cancel");
            this.checkBettedDragon = false;
            this.ToatalUser[0].active = false;
            this.listCancelBet[3].node.active = false;
            this.cloneBalance = this.cloneBalance - this.UserBetDragonIcon;
            this.balanceUser = this.balanceUser + this.UserBetDragonIcon;
            this.BalancerLb.string = this.balanceUser.toString();
            this.UserBetDragonIcon = 0;
            this.betDragonLb.string = this.UserBetDragonIcon.toString();
            this.ValueAnim1.removeAllChildren();
          }

          this.AudioController.onAudio(7);
        }

        CancelBetTie() {
          if (this.GameEnd === false) {
            this.NetworkConnect.room.send("cancel");
            this.NetworkConnect.room.onMessage("cancel", message => {
              console.log("Candỷush", message);
            });
            this.checkBettedTie = false;
            this.ToatalUser[1].active = false;
            this.listCancelBet[2].node.active = false;
            this.cloneBalance = this.cloneBalance - this.UserBetTieIcon;
            this.balanceUser = this.balanceUser + this.UserBetTieIcon;
            this.BalancerLb.string = this.balanceUser.toString();
            this.UserBetTieIcon = 0;
            this.betTieLb.string = this.UserBetTieIcon.toString();
            this.ValueAnim2.removeAllChildren();
          }

          this.AudioController.onAudio(7);
        }

        tweenChildrenToPosition(node, targetPosition, duration) {
          node.children.forEach(child => {
            tween(child).to(duration, {
              position: targetPosition
            }).call(() => {
              this.AudioController.onAudio(5);
              child.removeFromParent();
            }).start();
          });
        }

        Idle() {
          this.shuffelCard();
          this.DragonNode.play("DragonIde");
          this.TigerNode.play("TigerIde");
          this.GameStatePayOut = false; // this.GameStateStart = false;
        }

        StartBetting() {
          this.GameStateIdle = false;
          this.CardNodeAnim.node.active = false;
          this.CardNodeL.active = true;
          this.CardNodeR.active = true;
          this.CardNodeR.getComponent(Sprite).spriteFrame = this.bankCard;
          this.CardNodeL.getComponent(Sprite).spriteFrame = this.bankCard;
          this.StartBet.play("Startbet");
          tween(this.CardNodeL).to(0.4, {
            position: this.clonePosCardL
          }).call(() => {
            // this.GameEnd = false;
            this.AudioController.onAudio(1);
          }).start();
          tween(this.CardNodeR).to(0.4, {
            position: this.clonePosCardR
          }).call(() => {}).start(); // this.GameStateStart = true;
        }

        stopBetting() {
          this.StartBet.play("EndBet");
          this.AudioController.onAudio(2);
          this.GameEnd = true;
        }

        PosBet() {}

        fight() {
          if (this.NetworkConnect.result === "tigerWin") {
            this.balanceUser = this.balanceUser + this.UserBetTigerIcon * 2;
            this.BalancerLb.string = this.balanceUser.toString();
            this.WinNotice.play("TigerWin");
            this.DragonWinintro.play("TigerIntro");
            this.winIntroType = "TigerIntro";
            this.DragonWinintro.on(Animation.EventType.FINISHED, () => {
              if (this.winIntroType === "TigerIntro") {
                this.TigerNode.play("TigerAttack");
                this.TigerNode.on(Animation.EventType.FINISHED, () => {
                  this.DragonNode.play("DragonHurt");
                  this.DragonNode.on(Animation.EventType.FINISHED, () => {
                    this.DragonNode.play("DragonIde");
                    this.tweenChildrenToPosition(this.ValueAnim, new Vec3(30, 560), 0.5);
                    this.tweenChildrenToPosition(this.ValueAnim1, new Vec3(30, 560), 0.5);
                    this.tweenChildrenToPosition(this.ValueAnim2, new Vec3(30, 560), 0.5);
                  });
                  this.TigerNode.play("TigerIde");
                  this.TigerNode.off(Animation.EventType.FINISHED);
                });
              }
            });
          }

          if (this.NetworkConnect.result === "dragonWin") {
            this.balanceUser = this.balanceUser + this.UserBetDragonIcon * 2;
            this.BalancerLb.string = this.balanceUser.toString();
            this.WinNotice.play("DragonWinIcon");
            this.DragonWinintro.play("DragonIntro"); // Sử dụng biến để xác định loại WinIntro

            this.winIntroType = "DragonIntro";
            this.DragonWinintro.on(Animation.EventType.FINISHED, () => {
              // Kiểm tra loại WinIntro
              if (this.winIntroType === "DragonIntro") {
                this.DragonNode.play("DragonAttack");
                this.AudioController.onAudio(12);
                this.DragonNode.on(Animation.EventType.FINISHED, () => {
                  this.ExplosionDra.play();
                  this.AudioController.onAudio(10);
                  this.TigerNode.play("TigerHurt");
                  this.TigerNode.on(Animation.EventType.FINISHED, () => {
                    this.TigerNode.play("TigerIde");
                    this.tweenChildrenToPosition(this.ValueAnim, new Vec3(30, 560), 0.5);
                    this.tweenChildrenToPosition(this.ValueAnim1, new Vec3(30, 560), 0.5);
                    this.tweenChildrenToPosition(this.ValueAnim2, new Vec3(30, 560), 0.5);
                  });
                  this.DragonNode.play("DragonIde");
                  this.DragonNode.off(Animation.EventType.FINISHED);
                });
              }
            });
          }

          if (this.NetworkConnect.result === "Tie") {
            this.tweenChildrenToPosition(this.ValueAnim, new Vec3(30, 560), 0.5);
            this.tweenChildrenToPosition(this.ValueAnim1, new Vec3(30, 560), 0.5);
            this.tweenChildrenToPosition(this.ValueAnim2, new Vec3(30, 560), 0.5);
          }
        }

        shownResult() {
          this.NetworkConnect.room.onMessage("result", message => {
            console.log(message.dragonCard.value);
            console.log(message.dragonCard.suit);
          });
          tween(this.CardNodeL).to(0.4, {
            position: new Vec3(this.CardNodeL.position.x + 100, this.CardNodeL.position.y - 300)
          }).call(() => {
            this.displayImages();
            console.log("cos chay kgonggggggg");
          }).start();
          tween(this.CardNodeR).to(0.4, {
            position: new Vec3(this.CardNodeR.position.x - 100, this.CardNodeR.position.y - 300)
          }).call(() => {
            this.displayImagesCardR(); // this.createGrid();
            // this.createGridNot();
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "betTigerLb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "betDragonLb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "betTieLb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "UserName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "BalancerLb", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "totalUserBet", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "NameHost", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "chipNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "CardNodeL", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "CardNodeR", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "AvatarNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "AvatarNode1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "AvatarNode2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "AvatarNode3", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "AvatarL1", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "AvatarL2", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "AvatarL3", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "AvatarL4", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "AvatarL5", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "AvatarL6", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "GridL", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "GridR", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "ValueAnim", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "avaliablebet", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "scroll", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "ValueAnim1", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "ValueAnim2", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "loadingPage", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "loadingAudio", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "CardNodeAnim", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "WinNotice", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "DragonWinintro", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "DragonNode", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "TigerNode", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "StartBet", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "ExplosionDra", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "listCardRes", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "listCardResHeart", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "listCardResclubs", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "listCardResdiamonds", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "bankCard", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "pref", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "prefL", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "Over", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "Under", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "Tie", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "ToatalAv", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "ToatalUser", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "PayUser", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "BalanceList", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "TotalBetLB", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "PayUserSprite", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "listCancelBet", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "NetworkConnect", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "AudioController", [_dec56], {
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
//# sourceMappingURL=6091a36abae669bbf3783ac927d02fbc07420a9c.js.map