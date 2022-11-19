import { Bear } from "../abstract/Bear";
import { Cat } from "../abstract/Cat";
import { IToyFactory } from "../abstract/IToyFactory";
import { TeddyBear } from "./TeddyBear";
import { TeddyCat } from "./TeddyCat";

class TeddyToysFactory implements IToyFactory {
  GetBear(): Bear {
    return new TeddyBear();
  }

  GetCat(): Cat {
    return new TeddyCat();
  }
}

export { TeddyToysFactory };
