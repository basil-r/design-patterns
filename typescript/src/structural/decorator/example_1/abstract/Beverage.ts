import { Size } from "../concrete/Size";

abstract class Beverage {
  protected description: string = "Unknown Beverage";
  private size: Size = Size.TALL;

  getDescription(): string {
    return this.description;
  }

  getSize(): Size {
    return this.size;
  }

  setSize(size: Size): void {
    this.size = size;
  }

  abstract cost(): number;
}

export { Beverage };
