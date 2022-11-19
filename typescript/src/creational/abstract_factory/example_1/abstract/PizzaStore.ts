import { Pizza } from "./Pizza";

abstract class PizzaStore {
  orderPizza(type: string): Pizza | null {
    let pizza: Pizza | null;

    pizza = this.createPizza(type);

    if (pizza) {
      pizza.prepare();
      pizza.bake();
      pizza.cut();
      pizza.box();
    }

    return pizza;
  }

  protected abstract createPizza(type: string): Pizza | null;
}

export { PizzaStore };
