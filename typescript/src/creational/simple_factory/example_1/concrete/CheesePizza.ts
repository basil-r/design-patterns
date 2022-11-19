import { Pizza } from "../abstract/Pizza";

class CheesePizza extends Pizza {
  prepare(): void {
    console.log("Add cheese");
  }
}

export { CheesePizza };
