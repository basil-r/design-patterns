import { ConcreteComponentA } from "../concrete/ConcreteComponentA";
import { ConcreteComponentB } from "../concrete/ConcreteComponentB";

interface Visitor {
  visitConcreteComponentA(element: ConcreteComponentA): void;
  visitConcreteComponentB(element: ConcreteComponentB): void;
}

export { Visitor };
