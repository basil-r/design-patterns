import { Observer } from "./Observer";
import { QuackObservable } from "./QuackObservable";

class Observable implements QuackObservable {
  private observers: Observer[] = [];
  private duck: QuackObservable;

  constructor(duck: QuackObservable) {
    this.duck = duck;
  }

  registerObserver(observer: any): void {
    this.observers.push(observer);
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this.duck));
  }
}

export { Observable };
