import { Duck } from "./abstract/Duck";
import { MallardDuck } from "./concrete/MallardDuck";
import { TurkeyAdapter } from "./concrete/TurkeyAdapter";
import { WildTurkey } from "./concrete/WildTurkey";

const testDuck = (duck: Duck): void => {
  duck.quack();
  duck.fly();
};

const mallarDuck = new MallardDuck();

const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);

console.log("the Turkey says...");
turkey.gobble();
turkey.fly();

console.log("The Duck says...");
testDuck(mallarDuck);

console.log("The TurkeyAdapter says...");
testDuck(turkeyAdapter);
