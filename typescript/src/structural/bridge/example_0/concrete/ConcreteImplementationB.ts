import { Implementation } from "../abstract/Implementation";

class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
    return "ConcreteImplementationB: Here's the result on the platform B.";
  }
}

export { ConcreteImplementationB };
