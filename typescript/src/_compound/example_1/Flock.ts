import { Quackable } from "./Quackable";

class Flock implements Quackable {
  private quackers: Quackable[] = [];

  add(quacker: Quackable): void {
    this.quackers.push(quacker);
  }

  quack(): void {
    this.quackers.forEach((quacker) => quacker.quack());
  }

  registerObserver(observer: any): void {
    this.quackers.forEach((quacker) => quacker.registerObserver(observer));
  }

  notifyObservers(): void {}
}

export { Flock };
