import { CurrentConditionsDisplay } from "./CurrentConditionsDisplay";
import { WeatherData } from "./WeatherData";

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(25, 80, 90);
weatherData.setMeasurements(18, 99, 98);
weatherData.setMeasurements(32, 75, 90);
