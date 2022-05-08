import { Car } from "./Car";

class DecoratorCar extends Car {
  protected decoratedCar: Car;

  constructor(decoratedCar: Car) {
    super();
    this.decoratedCar = decoratedCar;
  }

  Go(): void {
    this.decoratedCar.Go();
  }
}

export { DecoratorCar };
