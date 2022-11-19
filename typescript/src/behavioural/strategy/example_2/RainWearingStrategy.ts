import { IWearingStrategy } from "./IWearingStrategy";

class RainWearingStrategy implements IWearingStrategy {
  GetClothes(): string {
    return "Coat";
  }
  GetAccessories(): string {
    return "umbrella";
  }
}

export { RainWearingStrategy };
