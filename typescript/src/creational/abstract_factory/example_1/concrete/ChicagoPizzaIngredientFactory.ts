import { BlackOlives } from "./BlackOlives";
import { Cheese } from "../abstract/Cheese";
import { Clams } from "../abstract/Clams";
import { Dough } from "../abstract/Dough";
import { Eggplant } from "./Eggplant";
import { FrozenClams } from "./FrozenClams";
import { MozzarellaCheese } from "./MozzarellaCheese";
import { Pepperoni } from "../abstract/Pepperoni";
import { PizzaIngredientFactory } from "../abstract/PizzaIngredientFactory";
import { PlumTomatoSauce } from "./PlumTomatoSauce";
import { Sauce } from "../abstract/Sauce";
import { SlicedPepperoni } from "./SlicedPepperoni";
import { Spinach } from "./Spinach";
import { ThickCrustDough } from "./ThickCrustDough";
import { Veggies } from "../abstract/Veggies";

class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce();
  }

  createCheese(): Cheese {
    return new MozzarellaCheese();
  }

  createVeggies(): Veggies[] {
    const veggies: Veggies[] = [
      new BlackOlives(),
      new Spinach(),
      new Eggplant(),
    ];
    return veggies;
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  createClam(): Clams {
    return new FrozenClams();
  }
}

export { ChicagoPizzaIngredientFactory };
