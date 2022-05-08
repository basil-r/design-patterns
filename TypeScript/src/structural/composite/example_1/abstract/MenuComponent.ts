abstract class MenuComponent {
  add(menuComponent: MenuComponent): void {
    throw new Error("Unsupported operation exception");
  }

  remove(menuComponent: MenuComponent): void {
    throw new Error("Unsupported operation exception");
  }

  getChild(i: number): MenuComponent {
    throw new Error("Unsupported operation exception");
  }

  getName(): string {
    throw new Error("Unsupported operation exception");
  }

  getDescription(): string {
    throw new Error("Unsupported operation exception");
  }

  getPrice(): number {
    throw new Error("Unsupported operation exception");
  }

  isVegetarian(): boolean {
    throw new Error("Unsupported operation exception");
  }

  print(): void {
    throw new Error("Unsupported operation exception");
  }
}

export { MenuComponent };
