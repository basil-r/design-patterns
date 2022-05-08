import { LoggerSingleton } from "./LoggerSingleton";

class HardProcessor {
  private _start: number;

  constructor(start: number) {
    this._start = start;
    LoggerSingleton.GetInstance().Log("Processor just created.");
  }

  ProcessTo(end: number): number {
    let sum = 0;

    for (let i = this._start; i <= end; ++i) {
      sum += i;
    }

    LoggerSingleton.GetInstance().Log(
      "Processor just calculated some value: " + sum
    );

    return sum;
  }
}

export { HardProcessor };
