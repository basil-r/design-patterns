import { Beverage } from "../abstract/Beverage";
import { CondimentDecorator } from "../abstract/CondimentDecorator";

class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Mocha";
  }
  
  cost(): number {
    return 0.2 + this.beverage.cost();
  }
}

export { Mocha };
