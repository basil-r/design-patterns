import { Component } from "../abstract/Component";
import { Visitor } from "../abstract/Visitor";

class ConcreteComponentB implements Component {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteComponentB(this);
  }

  public specialMethodOfConcreteComponentB(): string {
    return "B";
  }
}

export { ConcreteComponentB };
