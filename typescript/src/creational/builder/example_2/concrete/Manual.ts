import { CarType } from "./CarType";
import { Engine } from "./Engine";
import { GPSNavigator } from "./GPSNavigator";
import { Transmission } from "./Transmission";
import { TripComputer } from "./TripComputer";

class Manual {
  private readonly carType: CarType;
  private readonly seats: number;
  private readonly engine: Engine;
  private readonly transmission: Transmission;
  private readonly tripComputer: TripComputer;
  private readonly gpsNavigator: GPSNavigator;

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
    this.gpsNavigator = gpsNavigator;
  }

  print(): string {
    let info = "";
    info += "Type of car: " + this.carType + "\n";
    info += "Count of seats: " + this.seats + "\n";
    info +=
      "Engine: volume - " +
      this.engine.getVolume() +
      "; mileage - " +
      this.engine.getMileage() +
      "\n";
    info += "Transmission: " + this.transmission + "\n";
    if (this.tripComputer != null) {
      info += "Trip Computer: Functional" + "\n";
    } else {
      info += "Trip Computer: N/A" + "\n";
    }
    if (this.gpsNavigator != null) {
      info += "GPS Navigator: Functional" + "\n";
    } else {
      info += "GPS Navigator: N/A" + "\n";
    }
    return info;
  }
}

export { Manual };
