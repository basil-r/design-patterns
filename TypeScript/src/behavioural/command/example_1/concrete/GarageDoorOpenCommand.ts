import { Command } from "../abstract/Command";
import { GarageDoor } from "./GarageDoor";

class GarageDoorOpenCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}

  execute(): void {
    this.garageDoor.up();
  }
}

export { GarageDoorOpenCommand };
