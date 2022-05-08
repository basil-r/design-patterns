import { DisplayElement } from "./DisplayElement";
import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { WeatherData } from "./WeatherData";

class CurrentConditionsDisplay implements Observer, DisplayElement {
  observable: Observable;
  private temperature!: number;
  private humidity!: number;

  constructor(observable: Observable) {
    this.observable = observable;
    this.observable.addObserver(this);
  }

  update(o: Observable, arg?: object): void {
    if (o instanceof WeatherData) {
      this.temperature = o.getTemperature();
      this.humidity = o.getHumidity();
      this.display();
    }
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature} F degrees and ${this.humidity} % humidity`
    );
  }
}

export { CurrentConditionsDisplay };
