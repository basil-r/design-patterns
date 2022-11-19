import { Abstraction } from "./abstract/Abstraction";
import { ConcreteImplementationA } from "./concrete/ConcreteImplementationA";
import { ConcreteImplementationB } from "./concrete/ConcreteImplementationB";
import { ExtendedAbstraction } from "./concrete/ExtendedAbstraction";

function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operation());
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
