import { Cheese } from "../abstract/Cheese";
import { Clams } from "../abstract/Clams";
import { Dough } from "../abstract/Dough";
import { FreshClams } from "./FreshClams";
import { Garlic } from "./Garlic";
import { MarinaraSauce } from "./MarinaraSauce";
import { Mushroom } from "./Mushroom";
import { Onion } from "./Onion";
import { Pepperoni } from "../abstract/Pepperoni";
import { PizzaIngredientFactory } from "../abstract/PizzaIngredientFactory";
import { RedPepper } from "./RedPepper";
import { ReggianoCheese } from "./ReggianoCheese";
import { Sauce } from "../abstract/Sauce";
import { SlicedPepperoni } from "./SlicedPepperoni";
import { ThinCrustDough } from "./ThinCrustDough";
import { Veggies } from "../abstract/Veggies";

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();
  }

  createCheese(): Cheese {
    return new ReggianoCheese();
  }

  createVeggies(): Veggies[] {
    const veggies: Veggies[] = [
      new Garlic(),
      new Onion(),
      new Mushroom(),
      new RedPepper(),
    ];
    return veggies;
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  createClam(): Clams {
    return new FreshClams();
  }
}

export { NYPizzaIngredientFactory };
