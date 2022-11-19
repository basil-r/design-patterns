import { MenuComponent } from "../abstract/MenuComponent";

class Menu extends MenuComponent {
  private menuComponents: MenuComponent[] = [];

  constructor(private name: string, private description: string) {
    super();
  }

  add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent: MenuComponent): void {
    const index = this.menuComponents.indexOf(menuComponent);

    if (index > -1) {
      this.menuComponents.splice(index, 1);
    }
  }

  getChild(i: number): MenuComponent {
    return this.menuComponents[i];
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  print(): void {
    console.log(`\n${this.getName()}, ${this.getDescription()}`);
    console.log(`${"-".repeat(20)}`);

    for (const menuComponent of this.menuComponents) {
      menuComponent.print();
    }
  }
}

export { Menu };
