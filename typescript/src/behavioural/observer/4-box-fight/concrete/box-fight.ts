import { Observer } from "../abstract/observer";
import { Subject } from "../abstract/subject";

class BoxFight implements Subject {
  private observers: Set<Observer>;
  private _roundNumber: number = 0;
  private _boxerAScore: number = 0;
  private _boxerBScore: number = 0;

  constructor() {
    this.observers = new Set<Observer>();
  }

  get boxerAScore(): number {
    return this._boxerAScore;
  }

  get boxerBScore(): number {
    return this._boxerBScore;
  }

  get roundNumber(): number {
    return this._roundNumber;
  }

  attachObserver(observer: Observer): void {
    this.observers.add(observer);
  }

  detachObserver(observer: Observer): void {
    this.observers.delete(observer);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  nextRound(): void {
    this._roundNumber++;
    this._boxerAScore += Math.round(Math.random() * 5);
    this._boxerBScore += Math.round(Math.random() * 5);
    this.notify();
  }
}

export { BoxFight };
