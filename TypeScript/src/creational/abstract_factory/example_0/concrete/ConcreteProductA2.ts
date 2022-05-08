import { AbstractProductA } from "../abstract/AbstractProductA";

class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A2.";
  }
}

export { ConcreteProductA2 };
