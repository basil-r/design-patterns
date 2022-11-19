import { INewElectricitySystem } from "../abstract/INewElectricitySystem";

class ElectricityConsumer {
  static ChargeNotebook(electricitySystem: INewElectricitySystem): void {
    console.log(electricitySystem.MatchWideSocket());
  }
}

export { ElectricityConsumer };
