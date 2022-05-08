import { Duck } from "./Duck";
import { FlyNoWay } from "./FlyNoWay";
import { Quack } from "./Quack";

class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack());
  }

  display(): void {
    console.log("I'm a model duck");
  }
}

export { ModelDuck };
