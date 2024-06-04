import {
  _decorator,
  Component,
  instantiate,
  Label,
  Node,
  Prefab,
  Sprite,
  SpriteFrame,
  tween,
  Vec3,
  Animation,
} from "cc";

const { ccclass, property } = _decorator;
import Colyseus from "db://colyseus-sdk/colyseus.js";
import { AudioController } from "./AudioController";
import { Chip } from "./Chip";
@ccclass("NetworkConnect")
export class NetworkConnect extends Component {
  @property({ type: String })
  hostname = "localhost";

  @property({ type: Number })
  port = 80;

  @property({ type: Boolean })
  useSSL = true;

  @property({ type: Node })
  private ListL: Node[] = [];

  @property({ type: Node })
  private ListR: Node[] = [];

  @property({ type: Label })
  public ListLabel: Label[] = [];

  @property({ type: Label })
  public ListLabelR: Label[] = [];

  @property(Label)
  private TimerDown: Label;

  @property(Label)
  private CoinWinAni: Label;

  @property({
    type: Chip,
  })
  private chipNode: Chip;

  @property({
    type: Prefab,
  })
  private prfab: Prefab;

  @property({
    type: Node,
  })
  private DragonNode: Node;

  @property({
    type: Node,
  })
  private TigerNode: Node;

  @property({
    type: Node,
  })
  private TieNode: Node;

  @property({
    type: Node,
  })
  private PayUser: Node;

  @property({ type: Node })
  private ChipParent: Node[] = [];

  @property({ type: Prefab })
  public prefabs: Prefab[] = [];

  parentNodeChip;

  client!: Colyseus.Client;
  room!: Colyseus.Room;
  gameState;
  resultDragon: number = 0;
  resultTiger: number = 0;
  TotalUser;
  UserBet;
  NotmeBet;
  // result;
  winner;
  currentHost: any;
  balanceUser: any;
  TotalBalanceUser: any;
  betDragon: any;
  betTiger: any;
  betTie: any;
  totaluserBetDragon: any;
  totaluserBetTiger: any;
  totaluserBetTie: any;
  dragonReuslt;
  tigerResult;
  namePlayer;
  winnerPLayer;
  @property({
    type: AudioController,
  })
  private AudioController: AudioController;

  @property({
    type: SpriteFrame,
  })
  private PayUserSprite: SpriteFrame[] = [];

  async start() {
    this.client = new Colyseus.Client(
      `${this.useSSL ? "wss" : "ws"}://${this.hostname}:${this.port}`
    );

    this.connect();
  }

  async connect() {
    try {
      this.client.auth.token = localStorage.getItem("Token");
      console.log(this.client.auth.token);

      // this.room = await this.client.joinOrCreate("room1");
      const rooms = await this.client.getAvailableRooms("room1");
      if (rooms.length === 0) {
        this.room = await this.client.create("room1");
        console.log("Created new room with sessionId:", this.room.sessionId);
      } else {
        // Nếu có phòng có sẵn, tham gia vào phòng đầu tiên trong danh sách
        this.room = await this.client.joinById(rooms[0].roomId);
        console.log(
          "Joined existing room with sessionId:",
          this.room.sessionId
        );
      }
      const users = {};

      // Sự kiện được kích hoạt khi một người dùng tham gia vào phòng
      console.log("Joined successfully!");
      console.log("User's sessionId:", this.room.sessionId);

      this.room.onMessage("timer", (message) => {
        this.TimerDown.string = message;
        if (message < 30 && message > 0) {
          this.AudioController.onAudio(3);
        }
        if (message === 0) {
          this.AudioController.onAudio(4);
        }
      });

      this.room.onMessage("winnerList", (message) => {
        this.PayoutAnim(message);
        this.winAnimPlus(message);
      });

      this.room.onMessage("userCancel", (message) => {
        const usercancel = this.room.state.players.get(
          message.playerId
        ).displayName;
        for (let i = 0; i < this.ListLabel.length; i++) {
          if (usercancel === this.ListLabel[i].string) {
            this.ListLabel[i].node.removeAllChildren();
          }
        }
      });

      // this.room.onMessage("result", (message) => {
      //   // console.log(message.result);
      //   this.dragonReuslt = message.dragonCard.value;
      //   this.tigerResult = message.tigerCard.value;
      //   console.log("Roong", this.dragonReuslt);
      //   console.log("HO", this.tigerResult);

      //   this.result = message.result;
      // });

      this.room.onMessage("userBet", (message) => {
        console.log(message.betAmount);

        this.namePlayer = this.room.state.players.get(message.playerID);
        if (message.playerID != this.room.sessionId) {
          this.UserBet = message.betType;
          this.createSpriteNode(this.namePlayer.displayName, message.betAmount);
        } else {
          // console.log("false");
        }
      });

      this.room.onMessage("balance", (message) => {
        this.balanceUser = message.balance;
        console.log(message);
      });
      setInterval(() => {
        this.room.send("getBalance");
      }, 500);

      this.room.onStateChange((state) => {
        console.log("Room state changed:", state);
        console.log("onStateChange: ", state);
        console.log(state.roundState);

        this.betDragon = state.totalBetDragon;
        this.betTiger = state.totalBetTiger;
        this.betTie = state.totalBetTie;
        this.totaluserBetDragon = state.totalUserBetDragon;
        this.totaluserBetTiger = state.totalUserBetTiger;
        this.totaluserBetTie = state.totalUserBetTie;

        // console.log(this.room.state);
        this.currentHost = state.currentHostId;
        const players = [...state.players.values()];
        console.log("player List:........", players);

        this.updatePlayerList(players);
        // console.log("PlayerStatus", players[0].isHost);
        this.TotalUser = players.length;
        this.gameState = state.roundState;
      });

      this.room.onLeave((code) => {
        console.log("Left room with code:", code);
      });
    } catch (e) {
      console.error("Error:", e);
    }
  }

  // updatePlayerList(playerList: any[]) {
  //   let displayIndex = 0;

  //   [
  //     {
  //       0: [{}],
  //     },
  //   ];

  //   // // Lấy từng giá trị value từ
  //   const list = playerList[0];
  //   console.log("Listtttttt:", list);

  //   const numElements = list.length;

  //   this.ListL.forEach((node) => {
  //     node.active = false;
  //   });

  //   list.forEach((value: any, key: any) => {
  //     if (
  //       value.sessionId !== this.room.sessionId &&
  //       value.sessionId !== this.currentHost
  //     ) {
  //       const nameUser = value.displayName;
  //       console.log("Hostttttttttttt:", value.isHost);

  //       if (nameUser) {
  //         // Check if nameUser is defined
  //         this.ListLabel[displayIndex].string = nameUser;
  //         this.ListL[displayIndex].active = true;
  //         displayIndex++;
  //         this.AudioController.onAudio(9);
  //       } else {
  //         console.warn(
  //           `Player with sessionId ${value.sessionId} not found in room state.`
  //         );
  //       }
  //     }
  //   });
  //   for (let i = displayIndex; i < this.ListL.length; i++) {
  //     this.ListL[i].active = false;
  //   }
  // }

  updatePlayerList(playerList: any[]) {
    let displayIndex = 0;
    let displayIndexR = 0;
    [
      {
        0: [{}],
      },
    ];
    // // Lấy từng giá trị value từ
    const list = playerList[0];
    const list2 = playerList[0];
    console.log("Listtttttt:", list);
    this.ListL.forEach((node) => {
      node.active = false;
    });

    this.ListR.forEach((node) => {
      node.active = false;
    });

    list.forEach((value: any, key: any) => {
      if (
        value.sessionId !== this.room.sessionId &&
        value.sessionId !== this.currentHost
      ) {
        const nameUser = value.displayName;
        if (nameUser && value.isHost === false) {
          // Check if nameUser is defined
          this.ListLabel[displayIndex].string = nameUser;
          this.ListL[displayIndex].active = true;
          displayIndex++;
          this.AudioController.onAudio(9);
        } else {
          console.warn(
            `Player with sessionId ${value.sessionId} not found in room state.`
          );
        }
      }
      if (value.isHost === true && value.sessionId !== this.currentHost) {
        const nameUser2 = value.displayName;
        if (nameUser2 && value.isHost === true) {
          this.ListLabelR[displayIndexR].string = nameUser2;
          this.ListR[displayIndexR].active = true;
          displayIndexR++;
          this.AudioController.onAudio(9);
        } else {
          console.warn(
            `Player with sessionId ${value.sessionId} not found in room state.`
          );
        }
      }
    });

    // list2.forEach((value: any, key: any) => {

    // });
    for (let i = displayIndex; i < this.ListL.length; i++) {
      this.ListL[i].active = false;
    }

    for (let i = displayIndexR; i < this.ListR.length; i++) {
      this.ListR[i].active = false;
    }
  }

  private createSpriteNode(sessionId: string, betAmount: number) {
    if (betAmount < 1 || betAmount > 6) {
      console.error("Invalid betAmount:", betAmount);
      return;
    }

    // Lấy prefab tương ứng với betAmount
    const prefab = this.prefabs[betAmount - 1];
    const spriteNode = instantiate(prefab);
    spriteNode.scale = new Vec3(0.5, 0.5);
    let v3 = new Vec3();
    let PosTarget;

    // Kiểm tra nếu sessionId trùng khớp với label nào đó
    for (let i = 0; i < this.ListLabel.length; i++) {
      if (sessionId === this.ListLabel[i].string) {
        // Thêm node mới làm con của node có label tương ứng
        if (this.UserBet === "Dragon") {
          PosTarget = this.DragonNode;
          this.parentNodeChip = this.ChipParent[0];
        } else if (this.UserBet === "Tiger") {
          PosTarget = this.TigerNode;
          this.parentNodeChip = this.ChipParent[1];
        } else {
          PosTarget = this.TieNode;
          this.parentNodeChip = this.ChipParent[2];
        }
        this.ListLabel[i].node.addChild(spriteNode);
        this.ListLabel[i].node.inverseTransformPoint(
          v3,
          PosTarget.worldPosition
        );
        tween(spriteNode).to(0.3, { position: v3 }).start();
        break;
      }
    }

    for (let i = 0; i < this.ListLabelR.length; i++) {
      if (sessionId === this.ListLabelR[i].string) {
        // Thêm node mới làm con của node có label tương ứng
        if (this.UserBet === "Dragon") {
          PosTarget = this.DragonNode;
          this.parentNodeChip = this.ChipParent[0];
        } else if (this.UserBet === "Tiger") {
          PosTarget = this.TigerNode;
          this.parentNodeChip = this.ChipParent[1];
        } else {
          PosTarget = this.TieNode;
          this.parentNodeChip = this.ChipParent[2];
        }
        this.ListLabelR[i].node.addChild(spriteNode);
        this.ListLabelR[i].node.inverseTransformPoint(
          v3,
          PosTarget.worldPosition
        );
        tween(spriteNode).to(0.3, { position: v3 }).start();
        break;
      }
    }
  }

  private PayoutAnim(winnerList) {
    if (winnerList.length > 0) {
      this.AudioController.onAudio(6);
    }

    // Lặp qua danh sách người chiến thắng và tạo nút trả tiền cho mỗi người chiến thắng
    for (let i = 0; i < winnerList.length; i++) {
      const winner = this.room.state.players.get(
        winnerList[i].sessionId
      ).displayName;

      // Tìm node tương ứng với người chiến thắng
      const winnerNode = this.findWinnerNode(winner);

      if (winnerNode) {
        let v3 = new Vec3();
        this.PayUser.inverseTransformPoint(v3, winnerNode.worldPosition);
        // Tạo nút trả tiền cho người chiến thắng
        this.createSpriteNodePay(v3.x, v3.y, this.PayUserSprite);
      }
    }
  }
  private winAnimPlus(winid) {
    for (let i = 0; i < winid.length; i++) {
      if (winid[i].sessionId === this.room.sessionId) {
        this.CoinWinAni.string = "+" + winid[i].price.toString();
        this.CoinWinAni.node.active = true;
        this.CoinWinAni.node.getComponent(Animation).play();
        break; // Nếu tìm thấy phần tử thỏa mãn, dừng vòng lặp
      }
    }
  }

  // Hàm để tìm node tương ứng với người chiến thắng
  private findWinnerNode(winnerName) {
    // Lặp qua danh sách nhãn để tìm node có tên trùng khớp với người chiến thắng
    for (let i = 0; i < this.ListLabel.length; i++) {
      if (winnerName === this.ListLabel[i].string) {
        return this.ListLabel[i].node;
      }
    }
    return null; // Trả về null nếu không tìm thấy node
  }

  createSpriteNodePay(posX, posY, spriteFrames: SpriteFrame[]) {
    // Lặp qua từng sprite frame để tạo node tương ứng
    for (let i = 0; i < spriteFrames.length; i++) {
      // Tạo một Node mới
      const spriteNode = new Node("SpriteNode");
      spriteNode.scale = new Vec3(0.5, 0.5);

      // Thêm một component Sprite vào Node
      const spriteComponent = spriteNode.addComponent(Sprite);

      // Gán SpriteFrame cho component Sprite dựa trên index
      spriteComponent.spriteFrame = spriteFrames[i];

      // Thêm Node vào Scene hiện tại (ví dụ: Node cha của tất cả Sprite)
      this.PayUser.addChild(spriteNode); // Giả sử winner.node là node của người chiến thắng

      // Tween Node đến vị trí mong muốn
      tween(spriteNode)
        .delay(i * 0.1) // thiết lập thời gian trễ dựa trên index của node
        .to(1, { position: new Vec3(posX, posY) })
        .call(() => {
          spriteNode.active = false;
        })
        .start();
    }
  }
}
