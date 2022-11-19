import { LaptopBuilder } from "../abstract/LaptopBuilder";

class TripLaptopBuilder extends LaptopBuilder {
  setMonitorResolution(): void {
    this.laptop.monitorResolution = "1200x800";
  }
  setProcessor(): void {
    this.laptop.processor = "Core 2 Duo, 2.7 Ghz";
  }
  setMemory(): void {
    this.laptop.memory = "8 Gb";
  }
  setSsd(): void {
    this.laptop.ssd = "512 Gb";
  }
}

export { TripLaptopBuilder };
