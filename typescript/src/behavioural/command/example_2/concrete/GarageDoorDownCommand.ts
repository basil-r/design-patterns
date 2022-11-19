import { Command } from "../abstract/Command";
import { GarageDoor } from "./GarageDoor";

class GarageDoorDownCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}

  undo(): void {
    this.garageDoor.up();
  }

  execute(): void {
    this.garageDoor.down();
  }
}

export { GarageDoorDownCommand };
