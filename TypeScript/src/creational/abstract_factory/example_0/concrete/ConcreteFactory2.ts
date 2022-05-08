import { AbstractFactory } from "../abstract/AbstractFactory";
import { AbstractProductA } from "../abstract/AbstractProductA";
import { AbstractProductB } from "../abstract/AbstractProductB";
import { ConcreteProductA2 } from "./ConcreteProductA2";
import { ConcreteProductB2 } from "./ConcreteProductB2";

class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

export { ConcreteFactory2 };
