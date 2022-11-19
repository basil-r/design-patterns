class Engine {
  private readonly volume: number;
  private mileage: number;
  private started: boolean = false;

  constructor(volume: number, mileage: number) {
    this.volume = volume;
    this.mileage = mileage;
  }

  on(): void {
    this.started = true;
  }

  off(): void {
    this.started = false;
  }

  isStarted(): boolean {
    return this.started;
  }

  go(mileage: number): void {
    if (this.started) {
      this.mileage += mileage;
    } else {
      console.log("Cannot go(), you must start engine first!");
    }
  }

  getVolume(): number {
    return this.volume;
  }

  getMileage(): number {
    return this.mileage;
  }
}

export { Engine };
