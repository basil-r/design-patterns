class Stereo {
  private place: string;

  constructor(name: string) {
    this.place = name;
  }

  on(): void {
    console.log(`${this.place} stereo is on`);
  }

  off(): void {
    console.log(`${this.place} stereo is off`);
  }

  setCd(): void {
    console.log(`${this.place} stereo is set for CD input`);
  }

  setDvd(): void {
    console.log(`${this.place} stereo is set for DVD input`);
  }

  setRadio(): void {
    console.log(`${this.place} stereo is set for Radio`);
  }

  setVolume(volume: number): void {
    console.log(`${this.place} stereo volume set to ${volume}`);
  }
}

export { Stereo };
