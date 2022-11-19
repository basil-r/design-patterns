import { DefaultWearingStrategy } from "./DefaultWearingStrategy";
import { IWearingStrategy } from "./IWearingStrategy";

class Myself {
  private _wearingStrategy: IWearingStrategy = new DefaultWearingStrategy();

  ChangeStrategy(wearingStrategy: IWearingStrategy): void {
    this._wearingStrategy = wearingStrategy;
  }

  GoOutside(): void {
    const clothes = this._wearingStrategy.GetClothes();
    const accessories = this._wearingStrategy.GetAccessories();
    console.log(`Today I wore ${clothes} and took ${accessories}`);
  }
}

export { Myself };
