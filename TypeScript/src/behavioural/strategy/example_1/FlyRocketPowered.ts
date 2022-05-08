import { FlyBehavior } from "./FlyBehavior";

class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log("I'm flying with a rocket!");
  }
}

export { FlyRocketPowered };
