import { Duck } from "../abstract/Duck";
import { Turkey } from "../abstract/Turkey";

class TurkeyAdapter implements Duck {
  private turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  quack(): void {
    this.turkey.gobble();
  }

  fly(): void {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}

export { TurkeyAdapter };
