import { FlyBehavior } from "./FlyBehavior";

class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I'm flying!!");
  }
}

export { FlyWithWings };
