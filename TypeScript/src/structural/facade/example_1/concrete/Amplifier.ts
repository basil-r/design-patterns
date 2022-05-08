import { CdPlayer } from "./CdPlayer";
import { DvdPlayer } from "./DvdPlayer";
import { Tuner } from "./Tuner";

class Amplifier {
  private dvdPlayer!: DvdPlayer;

  constructor(private tuner: Tuner, private cdPlayer: CdPlayer) {}

  on(): void {}
  off(): void {}
  setCd(): void {}
  setDvd(dvd: DvdPlayer): void {
    this.dvdPlayer = dvd;
  }
  setStereoSound(): void {}
  setSurroundSoud(): void {}
  setTuner(): void {}
  setVolume(level: number): void {}
  toString(): void {}
}

export { Amplifier };
