import { ConcreteStrategyA } from "./concrete/ConcreteStrategyA";
import { ConcreteStrategyB } from "./concrete/ConcreteStrategyB";
import { Context } from "./concrete/Context";

const context = new Context(new ConcreteStrategyA());
console.log("Client: Strategy is set to normal sorting.");
context.doSomeBusinessLogic();

console.log("");

console.log("Client: Strategy is set to reverse sorting.");
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
