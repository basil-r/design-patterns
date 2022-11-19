import { AnimalToy } from "./AnimalToy";

abstract class Cat extends AnimalToy {
  constructor(name: string) {
    super(name);
  }
}

export { Cat };
