import { ChicagoStylePizzaStore } from "./concrete/ChicagoStylePizzaStore";
import { NYStylePizzaStore } from "./concrete/NYStylePizzaStore";
import { PizzaStore } from "./abstract/PizzaStore";

const nyPizzaStore: PizzaStore = new NYStylePizzaStore();
const chicagoPizzaStore: PizzaStore = new ChicagoStylePizzaStore();

let pizza = nyPizzaStore.orderPizza("cheese")!;
console.log(`Ethan ordered a ${pizza.getName()}`);

pizza = chicagoPizzaStore.orderPizza("cheese")!;
console.log(`Joel ordered a ${pizza.getName()}`);
