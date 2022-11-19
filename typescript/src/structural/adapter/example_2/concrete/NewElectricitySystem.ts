import { INewElectricitySystem } from "../abstract/INewElectricitySystem";

class NewElectricitySystem implements INewElectricitySystem {
  MatchWideSocket(): string {
    return "220V";
  }
}

export { NewElectricitySystem };
