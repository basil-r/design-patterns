import { CarType } from "./CarType";
import { Engine } from "./Engine";
import { GPSNavigator } from "./GPSNavigator";
import { Transmission } from "./Transmission";
import { TripComputer } from "./TripComputer";

class Car {
  private readonly carType: CarType;
  private readonly seats: number;
  private readonly engine: Engine;
  private readonly transmission: Transmission;
  private readonly tripComputer: TripComputer;
  private readonly gpsNavigator: GPSNavigator;
  private fuel: number = 0;

  constructor(
    carType: CarType,
    seats: number,
    engine: Engine,
    transmission: Transmission,
    tripComputer: TripComputer,
    gpsNavigator: GPSNavigator
  ) {
    this.carType = carType;
    this.seats = seats;
    this.engine = engine;
    this.transmission = transmission;
    this.tripComputer = tripComputer;

    if (this.tripComputer !== null) {
      this.tripComputer.setCar(this);
    }
    this.gpsNavigator = gpsNavigator;
  }

  public getCarType(): CarType {
    return this.carType;
  }

  public getFuel(): number {
    return this.fuel;
  }

  public setFuel(fuel: number): void {
    this.fuel = fuel;
  }

  public getSeats(): number {
    return this.seats;
  }

  public getEngine(): Engine {
    return this.engine;
  }

  public getTransmission(): Transmission {
    return this.transmission;
  }

  public getTripComputer(): TripComputer {
    return this.tripComputer;
  }

  public getGpsNavigator(): GPSNavigator {
    return this.gpsNavigator;
  }
}

export { Car };
