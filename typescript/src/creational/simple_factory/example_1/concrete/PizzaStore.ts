import { Pizza } from "../abstract/Pizza";
import { SimplePizzaFactory } from "./SimplePizzaFactory";

class PizzaStore {
  constructor(private factory: SimplePizzaFactory) {}

  orderPizza(type: string): Pizza {
    let pizza: Pizza;

    pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export { PizzaStore };
