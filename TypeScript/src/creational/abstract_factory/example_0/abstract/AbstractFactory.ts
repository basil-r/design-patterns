import { AbstractProductA } from "./AbstractProductA";
import { AbstractProductB } from "./AbstractProductB";

interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

export { AbstractFactory };
