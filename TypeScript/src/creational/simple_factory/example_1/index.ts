import { PizzaStore } from "./concrete/PizzaStore";
import { SimplePizzaFactory } from "./concrete/SimplePizzaFactory";

const pizzaStore = new PizzaStore(new SimplePizzaFactory());
pizzaStore.orderPizza("cheese");
