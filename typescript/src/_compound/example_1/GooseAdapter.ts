import { Goose } from "./Goose";
import { Observable } from "./Observable";
import { Quackable } from "./Quackable";

class GooseAdapter implements Quackable {
  private observable: Observable;

  constructor(private goose: Goose) {
    this.observable = new Observable(this);
  }

  registerObserver(observer: any): void {
    this.observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this.observable.notifyObservers();
  }

  quack(): void {
    this.goose.honk();
    this.notifyObservers();
  }
}

export { GooseAdapter };
