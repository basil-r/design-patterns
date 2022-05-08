import { BoxFight } from "./BoxFight";
import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

class RiskyPlayer implements IObserver {
  private _boxerToPutMoneyOn!: string;

  get BoxerToPutMoneyOn(): string {
    return this._boxerToPutMoneyOn;
  }

  set BoxerToPutMoneyOn(value: string) {
    this._boxerToPutMoneyOn = value;
  }

  Update(subject: ISubject): void {
    const boxFight = subject as BoxFight;

    if (boxFight.BoxerAScore > boxFight.BoxerBScore) {
      this._boxerToPutMoneyOn = "I put on boxer B, if he win I get more!";
    } else {
      this._boxerToPutMoneyOn = "I put on boxer A, if he win I get more!";
    }

    console.log(`RISKYPLAYER:${this._boxerToPutMoneyOn}`);
  }
}

export { RiskyPlayer };
