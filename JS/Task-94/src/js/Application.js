import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    //console.log(emojis);
  }

  addBananas() {
    const monkeyAndBanana = this.emojis.map(m => m + this.banana);
    //console.log(monkeyAndBanana);
    monkeyAndBanana.forEach(m => {
      const divElement = document.getElementById('emojis');
      divElement.textContent = '';
      const pElement = document.createElement('p');
      pElement.textContent = m;
      divElement.appendChild(pElement);
    });
  }
}
