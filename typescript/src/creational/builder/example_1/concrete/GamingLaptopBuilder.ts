import { LaptopBuilder } from "../abstract/LaptopBuilder";

class GamingLaptopBuilder extends LaptopBuilder {
  setMonitorResolution(): void {
    this.laptop.monitorResolution = "1900x1200";
  }

  setProcessor(): void {
    this.laptop.processor = "Core 4 Duo, 3.2Ghz";
  }

  setMemory(): void {
    this.laptop.memory = "16 Gb";
  }

  setSsd(): void {
    this.laptop.ssd = "1 Tb";
  }
}

export { GamingLaptopBuilder };
