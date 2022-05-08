import { LaptopBuilder } from "../abstract/LaptopBuilder";
import { Laptop } from "./Laptop";

class BuyLaptop {
  private laptopBuilder!: LaptopBuilder;

  setLaptopBuilder(laptopBuilder: LaptopBuilder): void {
    this.laptopBuilder = laptopBuilder;
  }

  getLaptop(): Laptop {
    return this.laptopBuilder.getMyLaptop();
  }

  constructLaptop(): void {
    this.laptopBuilder.createNewLaptop();
    this.laptopBuilder.setMonitorResolution();
    this.laptopBuilder.setProcessor();
    this.laptopBuilder.setMemory();
    this.laptopBuilder.setSsd();
  }
}

export { BuyLaptop };
