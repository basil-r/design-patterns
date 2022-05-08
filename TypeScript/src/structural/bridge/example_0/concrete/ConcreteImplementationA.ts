import { Implementation } from "../abstract/Implementation";

class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
    return "ConcreteImplementationA: Here's the result on the platform A.";
  }
}

export { ConcreteImplementationA };
