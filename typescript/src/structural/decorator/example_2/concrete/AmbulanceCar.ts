import { Car } from "../abstract/Car";
import { DecoratorCar } from "../abstract/DecoratorCar";

class AmbulanceCar extends DecoratorCar {
  constructor(decoratedCar: Car) {
    super(decoratedCar);
  }

  Go(): void {
    super.Go();
    console.log("... beep-beep-beeeeeep ...");
  }
}

export { AmbulanceCar };
