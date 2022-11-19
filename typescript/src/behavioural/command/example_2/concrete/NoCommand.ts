import { Command } from "../abstract/Command";

class NoCommand implements Command {
  undo(): void {}

  execute(): void {}
}

export { NoCommand };
