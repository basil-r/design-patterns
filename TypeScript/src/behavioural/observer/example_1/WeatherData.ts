import { Observer } from "./Observer";
import { Subject } from "./Subject";

class WeatherData implements Subject {
  private observers: Observer[];
  private temperature!: number;
  private humidity!: number;
  private pressure!: number;

  constructor() {
    this.observers = [];
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const i = this.observers.indexOf(o);
    if (i > -1) {
      this.observers.splice(i, 1);
    }
  }

  notifyObservers(): void {
    this.observers.forEach((o: Observer): void => {
      o.update(this.temperature, this.humidity, this.pressure);
    });
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

export { WeatherData };
