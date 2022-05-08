import { Component } from "../abstract/Component";

class ConcreteComponent implements Component {
  public operation(): string {
    return "ConcreteComponent";
  }
}

export { ConcreteComponent };
