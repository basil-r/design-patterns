import { Strategy } from "../abstract/Strategy";

class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

export { ConcreteStrategyA };
