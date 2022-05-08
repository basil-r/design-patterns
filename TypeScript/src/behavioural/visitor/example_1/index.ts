import { Component } from "./abstract/Component";
import { Visitor } from "./abstract/Visitor";
import { ConcreteComponentA } from "./concrete/ConcreteComponentA";
import { ConcreteComponentB } from "./concrete/ConcreteComponentB";
import { ConcreteVisitor1 } from "./concrete/ConcreteVisitor1";
import { ConcreteVisitor2 } from "./concrete/ConcreteVisitor2";

function clientCode(components: Component[], visitor: Visitor) {
  for (const component of components) {
    component.accept(visitor);
  }
}

const components = [new ConcreteComponentA(), new ConcreteComponentB()];

console.log(
  "The client code works with all visitors via the base Visitor interface:"
);
const visitor1 = new ConcreteVisitor1();
clientCode(components, visitor1);
console.log("");

console.log(
  "It allows the same client code to work with different types of visitors:"
);
const visitor2 = new ConcreteVisitor2();
clientCode(components, visitor2);
