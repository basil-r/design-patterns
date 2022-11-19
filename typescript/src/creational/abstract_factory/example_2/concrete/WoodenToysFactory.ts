import { Bear } from "../abstract/Bear";
import { Cat } from "../abstract/Cat";
import { IToyFactory } from "../abstract/IToyFactory";
import { WoodenBear } from "./WoodenBear";
import { WoodenCat } from "./WoodenCat";

class WoodenToysFactory implements IToyFactory {
  GetBear(): Bear {
    return new WoodenBear();
  }

  GetCat(): Cat {
    return new WoodenCat();
  }
}

export { WoodenToysFactory };
