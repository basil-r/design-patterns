class CeilingFan {
  static readonly HIGH: number = 3;
  static readonly MEDIUM: number = 2;
  static readonly LOW: number = 1;
  static readonly OFF: number = 0;
  private speed: number;

  constructor(private location: string) {
    this.speed = CeilingFan.OFF;
  }

  high(): void {
    this.speed = CeilingFan.HIGH;
    console.log(`${this.location} ceiling fan is on ${this.speed}`);
  }

  medium(): void {
    this.speed = CeilingFan.MEDIUM;
    console.log(`${this.location} ceiling fan is on ${this.speed}`);
  }

  low(): void {
    this.speed = CeilingFan.LOW;
    console.log(`${this.location} ceiling fan is on ${this.speed}`);
  }

  off(): void {
    this.speed = CeilingFan.OFF;
    console.log(`${this.location} ceiling fan is off`);
  }

  getSpeed(): number {
    return this.speed;
  }
}

export { CeilingFan };
