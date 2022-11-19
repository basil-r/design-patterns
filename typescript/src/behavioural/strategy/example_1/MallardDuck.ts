import { Duck } from "./Duck";
import { FlyWithWings } from "./FlyWithWings";
import { Quack } from "./Quack";

class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log("I'm a real Mallard duck");
  }
}

export { MallardDuck };
