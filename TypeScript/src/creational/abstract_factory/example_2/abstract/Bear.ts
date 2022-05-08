import { AnimalToy } from "./AnimalToy";

abstract class Bear extends AnimalToy {
  constructor(name: string) {
    super(name);
  }
}

export { Bear };
