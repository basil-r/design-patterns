import { Command } from "../abstract/Command";
import { NoCommand } from "./NoCommand";

class RemoteControl {
  onCommands: Command[];
  offCommands: Command[];
  undoCommand: Command;

  constructor() {
    this.onCommands = Array(7);
    this.offCommands = Array(7);

    const noCommand = new NoCommand();

    this.onCommands.fill(noCommand);
    this.offCommands.fill(noCommand);
    this.undoCommand = noCommand;
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  undoButtonWasPushed(): void {
    this.undoCommand.undo();
  }

  toString(): string {
    let stringBuff = "\n------ Remote Control ------\n";

    for (let i = 0; i < this.onCommands.length; i++) {
      stringBuff = stringBuff.concat(
        `[slot ${i}] ${this.onCommands[i].constructor.name} ${this.offCommands[i].constructor.name}\n`
      );
    }

    stringBuff = stringBuff.concat(
      `[slot undo] ${this.undoCommand.constructor.name}\n`
    );
    
    return stringBuff;
  }
}

export { RemoteControl };
