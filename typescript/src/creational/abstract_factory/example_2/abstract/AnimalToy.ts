abstract class AnimalToy {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  get Name(): string {
    return this.name;
  }

  set Name(value: string) {
    this.name = value + "*";
  }
}

export { AnimalToy };
