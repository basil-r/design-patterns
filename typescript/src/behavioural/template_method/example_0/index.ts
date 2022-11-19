import { AbstractClass } from "./abstract/AbstractClass";
import { ConcreteClass1 } from "./concrete/ConcreteClass1";
import { ConcreteClass2 } from "./concrete/ConcreteClass2";

function clientCode(abstractClass: AbstractClass) {
  abstractClass.templateMethod();
}

console.log("Same client code can work with different subclasses:");
clientCode(new ConcreteClass1());
console.log("");

console.log("Same client code can work with different subclasses:");
clientCode(new ConcreteClass2());
