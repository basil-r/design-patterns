import { IToyFactory } from "./abstract/IToyFactory";
import { TeddyToysFactory } from "./concrete/TeddyToysFactory";
import { WoodenToysFactory } from "./concrete/WoodenToysFactory";

let toyFactory: IToyFactory = new WoodenToysFactory();
let bear = toyFactory.GetBear();
let cat = toyFactory.GetCat();
console.log(`I've got ${bear.Name} and ${cat.Name}`);

toyFactory = new TeddyToysFactory();
bear = toyFactory.GetBear();
cat = toyFactory.GetCat();
console.log(`I've got ${bear.Name} and ${cat.Name}`);
