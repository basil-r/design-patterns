class Light {
  constructor(private place: string) {}

  on(): void {
    console.log(`${this.place} light is on`);
  }

  off(): void {
    console.log(`${this.place} light is off`);
  }
}

export { Light };
