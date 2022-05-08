import { Visitor } from "./Visitor";

interface Component {
  accept(visitor: Visitor): void;
}

export { Component };
