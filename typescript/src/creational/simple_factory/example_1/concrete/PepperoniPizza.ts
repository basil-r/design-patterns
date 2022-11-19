import { Pizza } from "../abstract/Pizza";

class PepperoniPizza extends Pizza {
  prepare(): void {
    console.log("Add papperoni");
  }
}

export { PepperoniPizza };
