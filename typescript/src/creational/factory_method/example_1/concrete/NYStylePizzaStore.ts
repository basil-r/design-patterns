import { NYStyleCheesePizza } from "./NYStyleCheesePizza";
import { NYStyleClamPizza } from "./NYStyleClamPizza";
import { NYStylePepperoniPizza } from "./NYStylePepperoniPizza";
import { NYStyleVeggiePizza } from "./NYStyleVeggiePizza";
import { Pizza } from "../abstract/Pizza";
import { PizzaStore } from "../abstract/PizzaStore";

class NYStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza | null {
    if (type === "cheese") {
      return new NYStyleCheesePizza();
    } else if (type === "pepperoni") {
      return new NYStylePepperoniPizza();
    } else if (type === "clam") {
      return new NYStyleClamPizza();
    } else if (type === "veggie") {
      return new NYStyleVeggiePizza();
    } else {
      return null;
    }
  }
}

export { NYStylePizzaStore };
