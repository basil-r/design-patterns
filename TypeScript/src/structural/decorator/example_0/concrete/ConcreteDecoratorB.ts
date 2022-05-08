import { Decorator } from "../abstract/Decorator";

class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

export { ConcreteDecoratorB };
