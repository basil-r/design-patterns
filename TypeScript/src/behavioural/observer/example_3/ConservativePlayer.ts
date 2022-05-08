import { BoxFight } from "./BoxFight";
import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

class ConservativePlayer implements IObserver {
  private _boxerToPutMoneyOn!: string;

  get BoxerToPutMoneyOn(): string {
    return this._boxerToPutMoneyOn;
  }

  set BoxerToPutMoneyOn(value: string) {
    this._boxerToPutMoneyOn = value;
  }

  Update(subject: ISubject): void {
    const boxFight = subject as BoxFight;

    if (boxFight.BoxerAScore < boxFight.BoxerBScore) {
      this._boxerToPutMoneyOn = "I put on boxer B, better be safe!";
    } else {
      this._boxerToPutMoneyOn = "I put on boxer A, better be safe!";
    }

    console.log(`CONSERVATIVEPLAYER:${this._boxerToPutMoneyOn}`);
  }
}

export { ConservativePlayer };
