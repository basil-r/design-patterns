import { Observer } from "./Observer";
import { QuackObservable } from "./QuackObservable";

class Quackologist implements Observer {
  update(duck: QuackObservable): void {
    console.log(`Quackologist: ${duck} just quacked.`);
  }
}

export { Quackologist };
