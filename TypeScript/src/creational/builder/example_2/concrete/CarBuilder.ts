import { Builder } from "../abstract/Builder";
import { Car } from "./Car";
import { CarType } from "./CarType";
import { Engine } from "./Engine";
import { GPSNavigator } from "./GPSNavigator";
import { Transmission } from "./Transmission";
import { TripComputer } from "./TripComputer";

class CarBuilder implements Builder {
  private type!: CarType;
  private seats!: number;
  private engine!: Engine;
  private transmission!: Transmission;
  private tripComputer!: TripComputer;
  private gpsNavigator!: GPSNavigator;

  setCarType(type: CarType): void {
    this.type = type;
  }

  setSeats(seats: number): void {
    this.seats = seats;
  }

  setEngine(engine: Engine): void {
    this.engine = engine;
  }

  setTransmission(transmission: Transmission): void {
    this.transmission = transmission;
  }

  setTripComputer(tripComputer: TripComputer): void {
    this.tripComputer = tripComputer;
  }

  setGPSNavigator(gpsNavigator: GPSNavigator): void {
    this.gpsNavigator = gpsNavigator;
  }

  getResult(): Car {
    return new Car(
      this.type,
      this.seats,
      this.engine,
      this.transmission,
      this.tripComputer,
      this.gpsNavigator
    );
  }
}

export { CarBuilder };
