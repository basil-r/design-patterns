import { Laptop } from "../concrete/Laptop";

abstract class LaptopBuilder {
  protected laptop!: Laptop;

  createNewLaptop(): void {
    this.laptop = new Laptop();
  }

  getMyLaptop(): Laptop {
    return this.laptop;
  }

  abstract setMonitorResolution(): void;
  abstract setProcessor(): void;
  abstract setMemory(): void;
  abstract setSsd(): void;
}

export { LaptopBuilder };
