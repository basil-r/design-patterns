import { AbstractFactory } from "../abstract/AbstractFactory";
import { AbstractProductA } from "../abstract/AbstractProductA";
import { AbstractProductB } from "../abstract/AbstractProductB";
import { ConcreteProductA1 } from "./ConcreteProductA1";
import { ConcreteProductB1 } from "./ConcreteProductB1";

class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

export { ConcreteFactory1 };
