import { Command } from "../abstract/Command";
import { Light } from "./Light";

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.on();
  }
}

export { LightOnCommand };
