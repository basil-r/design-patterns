import { Duck } from "../abstract/Duck";
import { Turkey } from "../abstract/Turkey";

class DuckAdapter implements Turkey {
  constructor(private duck: Duck) {}

  gobble(): void {
    this.duck.quack();
  }

  fly(): void {
    this.duck.fly();
  }
}

export { DuckAdapter };
