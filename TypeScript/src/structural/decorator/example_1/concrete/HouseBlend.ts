import { Beverage } from "../abstract/Beverage";

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  cost(): number {
    return 0.89;
  }
}

export { HouseBlend };
