import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

class BoxFight implements ISubject {
  private observers: IObserver[];
  private roundNumber: number = 0;
  private boxerAScore: number = 0;
  private boxerBScore: number = 0;

  constructor() {
    this.observers = [];
  }

  get BoxerAScore(): number {
    return this.boxerAScore;
  }

  get BoxerBScore(): number {
    return this.boxerBScore;
  }

  AttachObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  DetachObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  Notify(): void {
    for (const observer of this.observers) {
      observer.Update(this);
    }
  }

  NextRound(): void {
    this.roundNumber++;
    this.boxerAScore += Math.round(Math.random() * 5);
    this.boxerBScore += Math.round(Math.random() * 5);
    this.Notify();
  }
}

export { BoxFight };
