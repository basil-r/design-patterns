import { Turkey } from "../abstract/Turkey";

class WildTurkey implements Turkey {
  gobble(): void {
    console.log("Gobble gobble");
  }

  fly(): void {
    console.log("I'm flying a short distance");
  }
}

export { WildTurkey };
