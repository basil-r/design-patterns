import { CheesePizza } from "./CheesePizza";
import { ClamPizza } from "./ClamPizza";
import { PepperoniPizza } from "./PepperoniPizza";
import { Pizza } from "../abstract/Pizza";
import { PizzaIngredientFactory } from "../abstract/PizzaIngredientFactory";
import { PizzaStore } from "../abstract/PizzaStore";
import { VeggiePizza } from "./VeggiePizza";
import { ChicagoPizzaIngredientFactory } from "./ChicagoPizzaIngredientFactory";

class ChicagoStylePizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza | null {
    let pizza: Pizza | null = null;

    const ingredientFactory: PizzaIngredientFactory =
      new ChicagoPizzaIngredientFactory();

    if (item === "cheese") {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName("Chicago Style Cheese Pizza");
    } else if (item === "veggie") {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName("Chicago Style Veggie Pizza");
    } else if (item === "clam") {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName("Chicago Style Clam Pizza");
    } else if (item === "pepperoni") {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName("Chicago Style Pepperoni Pizza");
    }

    return pizza;
  }
}

export { ChicagoStylePizzaStore };
