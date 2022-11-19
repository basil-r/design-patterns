import { IWearingStrategy } from "./IWearingStrategy";

class DefaultWearingStrategy implements IWearingStrategy {
  GetClothes(): string {
    return "Shirt";
  }
  GetAccessories(): string {
    return "nothing";
  }
}

export { DefaultWearingStrategy };
