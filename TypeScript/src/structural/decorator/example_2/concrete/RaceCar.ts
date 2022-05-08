import { Car } from "../abstract/Car";
import { DecoratorCar } from "../abstract/DecoratorCar";

class RaceCar extends DecoratorCar {
  constructor(decoratedCar: Car) {
    super(decoratedCar);
  }

  Go(): void {
    super.Go();
    console.log("... super-fast ...");
  }
}

export { RaceCar };
