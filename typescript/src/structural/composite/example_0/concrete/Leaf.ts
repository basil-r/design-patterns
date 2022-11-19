import { Component } from "../abstract/Component";

class Leaf extends Component {
  public operation(): string {
    return "Leaf";
  }
}

export { Leaf };
