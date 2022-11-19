import { Duck } from "../abstract/Duck";

class MallardDuck implements Duck {
  quack(): void {
    console.log("Quack");
  }

  fly(): void {
    console.log("I'm flying");
  }
}

export { MallardDuck };
