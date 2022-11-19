import { BoxFight } from "./box-fight";
import { Observer } from "../abstract/observer";
import { Subject } from "../abstract/subject";

class RiskyPlayer implements Observer {
  private _boxerToPutMoneyOn!: string;

  get BoxerToPutMoneyOn(): string {
    return this._boxerToPutMoneyOn;
  }

  set BoxerToPutMoneyOn(value: string) {
    this._boxerToPutMoneyOn = value;
  }

  update(subject: Subject): void {
    const boxFight = subject as BoxFight;

    if (boxFight.boxerAScore > boxFight.boxerBScore) {
      this._boxerToPutMoneyOn = "I put on boxer B, if he win I get more!";
    } else {
      this._boxerToPutMoneyOn = "I put on boxer A, if he win I get more!";
    }

    console.log(`RISKYPLAYER:${this._boxerToPutMoneyOn}`);
  }
}

export { RiskyPlayer };
