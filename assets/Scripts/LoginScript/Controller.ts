import { _decorator, Button, Component, Node } from "cc";
const { ccclass, property } = _decorator;
import Colyseus from "db://colyseus-sdk/colyseus.js";
import sdk, { Client, Account, ID } from "appwrite";

@ccclass("Controller")
export class Controller extends Component {
  @property(Node)
  private ResBtn: Node;

  @property(Node)
  private LoginBtn: Node;

  @property(Node)
  private LoginTable: Node;

  @property(Node)
  private ResTable: Node;

  @property(Node)
  private ResBtnTb: Node;

  @property(Node)
  private LoginBtnTb: Node;

  client!: Colyseus.Client;
  room!: Colyseus.Room;
  // private appwriteClient = new sdk.Client()
  //   .setEndpoint("https://adroit-appwrite.our-projects.org/v1") // Your API Endpoint
  //   .setProject("6604076a003c15f4a892"); // Your project ID
  // private db = new sdk.Databases(this.appwriteClient);
  start() {}

  update(deltaTime: number) {}

  private async creatAcc() {
    // const account = new Account(client);
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
  private offLoginTable() {
    this.LoginTable.active = false;
    this.LoginBtnTb.active = false;
  }

  private onLoginTable() {
    this.LoginTable.active = true;
    this.LoginBtnTb.active = true;
  }

  private offResTable() {
    this.ResTable.active = false;
    this.ResBtnTb.active = false;
  }

  private onResTable() {
    this.ResTable.active = true;
    this.ResBtnTb.active = true;
  }
}
