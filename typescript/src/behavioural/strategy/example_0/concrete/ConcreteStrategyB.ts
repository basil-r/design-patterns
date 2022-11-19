import { Strategy } from "../abstract/Strategy";

class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

export { ConcreteStrategyB };
