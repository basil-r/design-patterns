import { ChicagoStylePizzaStore } from "./concrete/ChicagoStylePizzaStore";
import { NYPizzaStore } from "./concrete/NYPizzaStore";
import { PizzaStore } from "./abstract/PizzaStore";

const nyPizzaStore: PizzaStore = new NYPizzaStore();
const chicagoPizzaStore: PizzaStore = new ChicagoStylePizzaStore();

let pizza = nyPizzaStore.orderPizza("cheese")!;
console.log(`Ethan ordered a ${pizza.getName()}`);

pizza = chicagoPizzaStore.orderPizza("cheese")!;
console.log(`Joel ordered a ${pizza.getName()}`);
