import { ConcreteStateA } from "./concrete/ConcreteStateA";
import { Context } from "./concrete/Context";

const context = new Context(new ConcreteStateA());
context.request1();
context.request2();
