import { DisplayElement } from "./DisplayElement";
import { Observer } from "./Observer";
import { Subject } from "./Subject";

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature!: number;
  private humidity!: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature} F degrees and ${this.humidity} % humidity`
    );
  }
}

export { CurrentConditionsDisplay };
