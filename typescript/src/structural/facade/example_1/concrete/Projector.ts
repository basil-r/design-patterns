import { DvdPlayer } from "./DvdPlayer";

class Projector {
  constructor(private dvdPlayer: DvdPlayer) {}

  on(): void {}
  off(): void {}
  tvMode(): void {}
  wideScreenMode(): void {}
  toString(): void {}
}

export { Projector };
