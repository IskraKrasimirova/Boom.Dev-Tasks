import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._beat = new Beat();
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
    this._beat.addListener(Beat.events.BIT, () => this._create(lyrics[count > lyrics.length - 1 ? count = 0 : count++]));
    this.emit(Application.events.READY);
  }

  _create(message) {
    const main = document.querySelector('.main');
    const divMsg = document.createElement('div');
    divMsg.classList.add('message');
    divMsg.innerText = message;
    main.appendChild(divMsg);
  }
}
