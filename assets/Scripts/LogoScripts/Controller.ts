import { _decorator, Component, Node, Animation, director } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Controller")
export class Controller extends Component {
  @property(Animation)
  private LogoAnim: Animation;
  start() {
    this.LogoAnim.on(Animation.EventType.FINISHED, () => {
      director.loadScene("Login");
    });
  }
}
