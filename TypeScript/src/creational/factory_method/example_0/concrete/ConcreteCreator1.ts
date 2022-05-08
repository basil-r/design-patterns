import { Creator } from "../abstract/Creator";
import { Product } from "../abstract/Product";
import { ConcreteProduct1 } from "./ConcreteProduct1";

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

export { ConcreteCreator1 };
