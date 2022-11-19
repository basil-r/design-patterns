import { Creator } from "../abstract/Creator";
import { Product } from "../abstract/Product";
import { ConcreteProduct2 } from "./ConcreteProduct2";

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

export { ConcreteCreator2 };
