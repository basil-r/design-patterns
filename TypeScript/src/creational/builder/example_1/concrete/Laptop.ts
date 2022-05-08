class Laptop {
  monitorResolution!: string;
  processor!: string;
  memory!: string;
  ssd!: string;

  toString(): string {
    return `Laptop: ${this.monitorResolution}, ${this.processor}, ${this.memory}, ${this.ssd}`;
  }
}

export { Laptop };
