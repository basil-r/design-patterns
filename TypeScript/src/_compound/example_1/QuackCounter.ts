import { Quackable } from "./Quackable";

class QuackCounter implements Quackable {
  static numberOfQuacks: number = 0;

  constructor(private duck: Quackable) {}

  registerObserver(observer: any): void {
    this.duck.registerObserver(observer);
  }

  notifyObservers(): void {
    this.duck.notifyObservers();
  }

  quack(): void {
    this.duck.quack();
    QuackCounter.numberOfQuacks++;
  }

  static getQuacks(): number {
    return this.numberOfQuacks;
  }
}

export { QuackCounter };
