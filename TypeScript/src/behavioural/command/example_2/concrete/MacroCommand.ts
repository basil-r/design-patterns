import { Command } from "../abstract/Command";

class MacroCommand implements Command {
  constructor(private commands: Command[]) {}

  execute(): void {
    this.commands.forEach((command: Command): void => command.execute());
  }

  undo(): void {
    this.commands.forEach((command: Command): void => command.undo());
  }
}

export { MacroCommand };
