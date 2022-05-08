import { Decorator } from "../abstract/Decorator";

class ConcreteDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

export { ConcreteDecoratorA };
