import { Beverage } from "./abstract/Beverage";
import { DarkRoast } from "./concrete/DarkRoast";
import { Espresso } from "./concrete/Espresso";
import { HouseBlend } from "./concrete/HouseBlend";
import { Mocha } from "./concrete/Mocha";
import { Size } from "./concrete/Size";
import { Soy } from "./concrete/Soy";
import { Whip } from "./concrete/Whip";

const beverage: Beverage = new Espresso();
console.log(`${beverage.getDescription()} $${beverage.cost()}`);

let beverage2: Beverage = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);

let beverage3 = new HouseBlend();
beverage3.setSize(Size.VENTI);
console.log(beverage3.getSize()); // 2
beverage3 = new Soy(beverage3);
console.log(beverage3.getSize()); // 2

beverage3.setSize(Size.GRANDE);
console.log(beverage3.getSize()); // 1

beverage3 = new Mocha(beverage3);
console.log(beverage3.getSize()); // 1
beverage3 = new Whip(beverage3);
console.log(beverage3.getSize()); // 1
console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);
