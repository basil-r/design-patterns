import { Device } from "../abstract/Device";

class Radio implements Device {
  private on: boolean = false;
  private volume: number = 30;
  private channel: number = 1;

  isEnabled(): boolean {
    return this.on;
  }

  enable(): void {
    this.on = true;
  }

  disable(): void {
    this.on = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(volume: number): void {
    if (volume > 100) {
      this.volume = 100;
    } else if (volume < 0) {
      this.volume = 0;
    } else {
      this.volume = volume;
    }
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }

  printStatus(): void {
    console.log("------------------------------------");
    console.log("| I'm radio.");
    console.log("| I'm " + (this.on ? "enabled" : "disabled"));
    console.log("| Current volume is " + this.volume + "%");
    console.log("| Current channel is " + this.channel);
    console.log("------------------------------------\n");
  }
}

export { Radio };
