import { Command } from "../abstract/Command";
import { Light } from "./Light";

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  undo(): void {
    this.light.on();
  }

  execute(): void {
    this.light.off();
  }
}

export { LightOffCommand };
