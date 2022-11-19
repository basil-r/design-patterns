import { AbstractProductA } from "../abstract/AbstractProductA";

class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A1.";
  }
}

export { ConcreteProductA1 };
