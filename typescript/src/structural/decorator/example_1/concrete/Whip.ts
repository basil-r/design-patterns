import { Beverage } from "../abstract/Beverage";
import { CondimentDecorator } from "../abstract/CondimentDecorator";

class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Whip";
  }

  cost(): number {
    return 0.10 + this.beverage.cost();
  }
}

export { Whip };
