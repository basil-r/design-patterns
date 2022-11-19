import { Beverage } from "./Beverage";
import { Size } from "../concrete/Size";

abstract class CondimentDecorator extends Beverage {
  constructor(protected beverage: Beverage) {
    super();
  }

  //after decoration get size of wrapped component not of decorator
  getSize(): Size {
    return this.beverage.getSize();
  }

  setSize(size: Size): void {
    this.beverage.setSize(size);
  }

  abstract getDescription(): string;
}

export { CondimentDecorator };
