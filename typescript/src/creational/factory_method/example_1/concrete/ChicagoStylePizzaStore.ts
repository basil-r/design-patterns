import { ChicagoStyleCheesePizza } from "./ChicagoStyleCheesePizza";
import { ChicagoStyleClamPizza } from "./ChicagoStyleClamPizza";
import { ChicagoStylePepperoniPizza } from "./ChicagoStylePepperoniPizza";
import { ChicagoStyleVeggiePizza } from "./ChicagoStyleVeggiePizza";
import { Pizza } from "../abstract/Pizza";
import { PizzaStore } from "../abstract/PizzaStore";

class ChicagoStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza | null {
    if (type === "cheese") {
      return new ChicagoStyleCheesePizza();
    } else if (type === "pepperoni") {
      return new ChicagoStylePepperoniPizza();
    } else if (type === "clam") {
      return new ChicagoStyleClamPizza();
    } else if (type === "veggie") {
      return new ChicagoStyleVeggiePizza();
    } else {
      return null;
    }
  }
}

export { ChicagoStylePizzaStore };
