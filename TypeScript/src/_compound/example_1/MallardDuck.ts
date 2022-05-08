import { Observable } from "./Observable";
import { Quackable } from "./Quackable";

class MallardDuck implements Quackable {
  private observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  registerObserver(observer: any): void {
    this.observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this.observable.notifyObservers();
  }

  quack(): void {
    console.log("Quack");
    this.notifyObservers();
  }
}

export { MallardDuck };
