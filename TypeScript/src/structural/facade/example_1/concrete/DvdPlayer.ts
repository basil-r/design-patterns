import { Amplifier } from "./Amplifier";

class DvdPlayer {
  private amplifier!: Amplifier;

  on(): void {}
  off(): void {}
  eject(): void {}
  pause(): void {}
  play(movie: string): void {}
  setSurroundAudio(): void {}
  setTwoChannelAudio(): void {}
  stop(): void {}
}

export { DvdPlayer };
