import { Product } from "../abstract/Product";

class ConcreteProduct1 implements Product {
  public operation(): string {
    return "{Result of the ConcreteProduct1}";
  }
}

export { ConcreteProduct1 };
