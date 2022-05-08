import { Device } from "../abstract/Device";
import { BasicRemote } from "./BasicRemote";

class AdvancedRemote extends BasicRemote {
  constructor(device: Device) {
    super(device);
  }

  mute(): void {
    console.log("Remote: mute");
    this.device.setVolume(0);
  }
}

export { AdvancedRemote };
