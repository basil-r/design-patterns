interface Command {
  execute(): void;
  undo(): void;
}

export { Command };
