import { INewElectricitySystem } from "../abstract/INewElectricitySystem";
import { OldElectricitySystem } from "./OldElectricitySystem";

class Adapter implements INewElectricitySystem {
  private readonly _adaptee: OldElectricitySystem;

  constructor(adaptee: OldElectricitySystem) {
    this._adaptee = adaptee;
  }

  MatchWideSocket(): string {
    return this._adaptee.MatchThinSocket();
  }
}

export { Adapter };
