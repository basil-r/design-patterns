import { Command } from "../abstract/Command";

class SimpleRemoteControl {
  private slot: Command | null = null;

  setCommand(command: Command): void {
    this.slot = command;
  }

  buttonWasPressed(): void {
    this.slot?.execute();
  }
}

export { SimpleRemoteControl };
