import { FlyBehavior } from "./FlyBehavior";
import { QuackBehavior } from "./QuackBehavior";

abstract class Duck {
  constructor(
    protected flyBehavior: FlyBehavior,
    protected quackBehavior: QuackBehavior
  ) {}

  setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qb: QuackBehavior): void {
    this.quackBehavior = qb;
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }

  performFly(): void {
    this.flyBehavior.fly();
  }

  swim(): void {
    console.log("All ducks float, even decoys!");
  }

  abstract display(): void;
}

export { Duck };
