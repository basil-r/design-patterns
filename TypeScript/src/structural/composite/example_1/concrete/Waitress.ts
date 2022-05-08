import { MenuComponent } from "../abstract/MenuComponent";

class Waitress {
  constructor(private allMenus: MenuComponent) {}

  printMenu(): void {
    this.allMenus.print();
  }
}

export { Waitress };
