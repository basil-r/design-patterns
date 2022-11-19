import { CheesePizza } from "./CheesePizza";
import { ClamPizza } from "./ClamPizza";
import { NYPizzaIngredientFactory } from "./NYPizzaIngredientFactory";
import { PepperoniPizza } from "./PepperoniPizza";
import { Pizza } from "../abstract/Pizza";
import { PizzaIngredientFactory } from "../abstract/PizzaIngredientFactory";
import { PizzaStore } from "../abstract/PizzaStore";
import { VeggiePizza } from "./VeggiePizza";

class NYPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza | null {
    let pizza: Pizza | null = null;

    const ingredientFactory: PizzaIngredientFactory =
      new NYPizzaIngredientFactory();

    if (item === "cheese") {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName("New York Style Cheese Pizza");
    } else if (item === "veggie") {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName("New York Style Veggie Pizza");
    } else if (item === "clam") {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName("New York Style Clam Pizza");
    } else if (item === "pepperoni") {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName("New York Style Pepperoni Pizza");
    }

    return pizza;
  }
}

export { NYPizzaStore };
