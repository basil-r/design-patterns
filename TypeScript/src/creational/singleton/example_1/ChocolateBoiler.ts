class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private static uniqueInstance: ChocolateBoiler;

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  static getInstance(): ChocolateBoiler {
    if (!ChocolateBoiler.uniqueInstance) {
      ChocolateBoiler.uniqueInstance = new ChocolateBoiler();
    }

    return ChocolateBoiler.uniqueInstance;
  }

  fill(): void {
    if (this.isEmpty()) {
      this.empty = false;
      this.boiled = false;
    }
  }

  drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      this.empty = true;
    }
  }

  boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      this.boiled = true;
    }
  }

  isEmpty(): boolean {
    return this.empty;
  }

  isBoiled(): boolean {
    return this.boiled;
  }
}

export { ChocolateBoiler };
