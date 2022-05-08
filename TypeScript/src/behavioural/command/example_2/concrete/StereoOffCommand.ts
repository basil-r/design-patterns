import { Command } from "../abstract/Command";
import { Stereo } from "./Stereo";

class StereoOffCommand implements Command {
  constructor(private stereo: Stereo) {}

  undo(): void {
    this.stereo.on();
  }

  execute(): void {
    this.stereo.off();
  }
}

export { StereoOffCommand };
