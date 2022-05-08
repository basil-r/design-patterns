import { Pizza } from "../abstract/Pizza";

class VeggiePizza extends Pizza {
  prepare(): void {
    console.log("Make veggie");
  }
}

export { VeggiePizza };
