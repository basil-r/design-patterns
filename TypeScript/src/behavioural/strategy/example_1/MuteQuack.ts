import { QuackBehavior } from "./QuackBehavior";

class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log("Silence");
  }
}

export { MuteQuack };
