import { Component } from "../abstract/Component";
import { Visitor } from "../abstract/Visitor";

class ConcreteComponentA implements Component {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteComponentA(this);
  }

  public exclusiveMethodOfConcreteComponentA(): string {
    return "A";
  }
}

export { ConcreteComponentA };
