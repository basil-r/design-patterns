import { AbstractDuckFactory } from "./AbstractDuckFactory";
import { DuckCall } from "./DuckCall";
import { Flock } from "./Flock";
import { Goose } from "./Goose";
import { GooseAdapter } from "./GooseAdapter";
import { MallardDuck } from "./MallardDuck";
import { Quackable } from "./Quackable";
import { QuackCounter } from "./QuackCounter";
import { Quackologist } from "./Quackologist";
import { RedheadDuck } from "./RedheadDuck";
import { RubberDuck } from "./RubberDuck";

class DuckSimulator {
  simulate(duckFactory: AbstractDuckFactory, duck?: Quackable): void {
    if (duck) {
      this._simulate(duck);
    } else {
      const redheadDuck: Quackable = duckFactory.createRedheadDuck();
      const duckCall: Quackable = duckFactory.createDuckCall();
      const rubberDuck: Quackable = duckFactory.createRubberDuck();
      const gooseDuck: Quackable = new GooseAdapter(new Goose());

      const flockOfDucks = new Flock();

      flockOfDucks.add(redheadDuck);
      flockOfDucks.add(duckCall);
      flockOfDucks.add(rubberDuck);
      flockOfDucks.add(gooseDuck);

      const flockOfMallards = new Flock();

      const mallardOne = duckFactory.createMallardDuck();
      const mallardTwo = duckFactory.createMallardDuck();
      const mallardThree = duckFactory.createMallardDuck();
      const mallardFour = duckFactory.createMallardDuck();

      flockOfMallards.add(mallardOne);
      flockOfMallards.add(mallardTwo);
      flockOfMallards.add(mallardThree);
      flockOfMallards.add(mallardFour);

      flockOfDucks.add(flockOfMallards);

      console.log("\nDuck Simulator: With Observer");
      const quackologist = new Quackologist();
      flockOfDucks.registerObserver(quackologist);
      
      this._simulate(flockOfDucks);

      console.log("Duck Simulator: Mallard Flock Simulation");
      this._simulate(flockOfMallards);

      console.log(`The ducks quacked ${QuackCounter.getQuacks()} times`);
    }
  }

  private _simulate(duck: Quackable): void {
    duck.quack();
  }
}

export { DuckSimulator };
