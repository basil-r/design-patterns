import { Visitor } from "../abstract/Visitor";
import { ConcreteComponentA } from "./ConcreteComponentA";
import { ConcreteComponentB } from "./ConcreteComponentB";

class ConcreteVisitor2 implements Visitor {
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(
      `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`
    );
  }

  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(
      `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`
    );
  }
}

export { ConcreteVisitor2 };
