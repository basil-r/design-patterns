import { CarType } from "../concrete/CarType";
import { Engine } from "../concrete/Engine";
import { GPSNavigator } from "../concrete/GPSNavigator";
import { Transmission } from "../concrete/Transmission";
import { TripComputer } from "../concrete/TripComputer";

interface Builder {
  setCarType(type: CarType): void;
  setSeats(seats: number): void;
  setEngine(engine: Engine): void;
  setTransmission(transmission: Transmission): void;
  setTripComputer(tripComputer: TripComputer): void;
  setGPSNavigator(gpsNavigator: GPSNavigator): void;
}

export { Builder };
