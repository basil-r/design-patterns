import { BoxFight } from "./box-fight";
import { Observer } from "../abstract/observer";
import { Subject } from "../abstract/subject";

class ConservativePlayer implements Observer {
  private _boxerToPutMoneyOn!: string;

  get boxerToPutMoneyOn(): string {
    return this._boxerToPutMoneyOn;
  }

  set boxerToPutMoneyOn(value: string) {
    this._boxerToPutMoneyOn = value;
  }

  update(subject: Subject): void {
    const boxFight = subject as BoxFight;

    if (boxFight.boxerAScore < boxFight.boxerBScore) {
      this._boxerToPutMoneyOn = "I put on boxer B, better be safe!";
    } else {
      this._boxerToPutMoneyOn = "I put on boxer A, better be safe!";
    }

    console.log(`CONSERVATIVEPLAYER:${this._boxerToPutMoneyOn}`);
  }
}

export { ConservativePlayer };
