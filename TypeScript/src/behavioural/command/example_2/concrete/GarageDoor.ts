class GarageDoor {
  constructor(private place: string) {}

  up(): void {
    console.log(`${this.place} garage door is open`);
  }

  down(): void {
    console.log(`${this.place} garage door is close`);
  }

  stop(): void {
    console.log(`${this.place} garage door is pause`);
  }

  lightOn(): void {
    console.log(`${this.place} garage light is on`);
  }

  lightOff(): void {
    console.log(`${this.place} garage light is off`);
  }
}

export { GarageDoor };
