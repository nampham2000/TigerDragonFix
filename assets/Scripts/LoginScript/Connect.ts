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
  director,
  EditBox,
  Button,
} from "cc";
const { ccclass, property } = _decorator;
import Colyseus from "db://colyseus-sdk/colyseus.js";
import { getToken } from "../Constant";
// import { AudioController } from "./AudioController";
// import { Chip } from "./Chip";
let loggedInUserSession: any = null;

@ccclass("NetworkConnect")
export class NetworkConnect extends Component {
  @property({ type: String })
  hostname = "localhost";

  @property({ type: Number })
  port = 80;

  @property({ type: Boolean })
  useSSL = true;

  @property(EditBox)
  private boxNameRes: EditBox = null;

  @property(EditBox)
  private boxNameLogin: EditBox = null;

  @property(EditBox)
  private boxPassLogin: EditBox = null;

  @property(EditBox)
  private boxPassRes: EditBox = null;

  @property(EditBox)
  private boxRePassRes: EditBox = null;

  @property(Node)
  private LoadingPageProcess: Node = null;

  @property(Animation)
  private loadingAnimProject: Animation = null;

  @property(Node)
  private ResTable: Node;

  @property(Node)
  private ResBtnTb: Node;

  @property(Animation)
  private WarnRes: Animation;

  @property(Animation)
  private WarnEmail: Animation;

  @property(Button)
  private LoginBtn: Button;

  @property(Button)
  private ResBtn: Button;

  @property(Button)
  private LoginBtnactive: Button;

  // @property({
  //   type: Chip,
  // })
  // private chipNode: Chip;

  client!: Colyseus.Client;
  room!: Colyseus.Room;
  private async login(email: string, password: string) {
    try {
      //   // Gửi thông tin đăng nhập đến phòng Colyseus
      let response = await fetch(
        "https://adroit-appwrite.our-projects.org/v1/account/sessions/email",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.5.0",
            "X-Appwrite-Project": "6604076a003c15f4a892",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      let headers = response.headers;
      const cookies = headers.get("x-fallback-cookies");
      const cookiesObject = JSON.parse(cookies);
      const sessionValue = cookiesObject["a_session_6604076a003c15f4a892"];
      localStorage.setItem("Token", sessionValue);
      this.LoadingPageProcess.active = true;
      this.loadingAnimProject.play();
      this.moveToGameScene();
    } catch (error) {
      console.error("Error:", error);
      this.showErrorMessage("Incorrect email or password");
    }
  }

  private async Signup(email: string, password: string, name: string) {
    if (!email || !password || !name) {
      this.WarnEmail.play("WarningEmail");
      return;
    }
    try {
      // Gửi thông tin đăng nhập đến phòng Colyseus
      let response = await fetch(
        "https://adroit-appwrite.our-projects.org/v1/account",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.5.0",
            "X-Appwrite-Project": "6604076a003c15f4a892",
          },
          body: JSON.stringify({
            userId: this.generateUUID(),
            email: email,
            password: password,
            name: name,
          }),
        }
      );
      if (this.ResTable && this.ResBtnTb) {
        this.ResTable.active = false;
        this.ResBtnTb.active = false;
        this.WarnRes.play();
      }
    } catch (error) {
      console.error("Error:", error);
      this.showErrorMessage("Incorrect email or password");
    }
  }
  generateUUID() {
    let d = new Date().getTime();
    const uuid = "xxxxxxxxxxxxxxxyxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }

  private moveToGameScene() {
    // Chuyển đến scene chơi game
    director.loadScene("Game");
  }

  private showErrorMessage(message: string) {
    // Hiển thị thông báo lỗi trên màn hình nếu cần
  }

  private loginBtn() {
    const username = this.boxNameLogin.string;
    const password = this.boxPassLogin.string;
    this.login(username, password);
    this.LoginBtnactive.node.active = true;
    setTimeout(() => {
      this.LoginBtnactive.node.active = false;
    }, 3000);
  }

  private signUp(email: string, password: string, name: string) {
    email = this.boxNameRes.string;
    password = this.boxPassRes.string;
    name = this.boxRePassRes.string;
    this.Signup(email, password, name);
    this.ResBtn.node.active = true;
    setTimeout(() => {
      this.ResBtn.node.active = false;
    }, 3000);
  }

  // Phương thức để xử lý kết quả đăng nhập từ server
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
    this.client = new Colyseus.Client(
      `${this.useSSL ? "wss" : "ws"}://${this.hostname}:${this.port}`
    );
    const uuid = this.generateUUID();
    const checkToken = localStorage.getItem("key");
    if (checkToken) {
      this.LoadingPageProcess.active = true;
      this.loadingAnimProject.play();
      this.moveToGameScene();
    } else {
    }
    // this.connect();
  }

  async connect() {
    // try {
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
  }
}
