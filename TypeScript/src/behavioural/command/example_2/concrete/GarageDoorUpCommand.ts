import { Command } from "../abstract/Command";
import { GarageDoor } from "./GarageDoor";

class GarageDoorUpCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}

  execute(): void {
    this.garageDoor.up();
  }

  undo(): void {
    this.garageDoor.down();
  }
}

export { GarageDoorUpCommand };
