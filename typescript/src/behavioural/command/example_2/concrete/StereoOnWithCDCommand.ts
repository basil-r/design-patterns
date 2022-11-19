import { Command } from "../abstract/Command";
import { Stereo } from "./Stereo";

class StereoOnWithCDCommand implements Command {
  constructor(private stereo: Stereo) {}

  undo(): void {
    this.stereo.off();
  }

  execute(): void {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume(11);
  }
}

export { StereoOnWithCDCommand };
