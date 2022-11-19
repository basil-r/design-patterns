import { CafeMenu } from "./CafeMenu";
import { Iterator } from "../abstract/Iterator";
import { Menu } from "../abstract/Menu";
import { MenuItem } from "./MenuItem";

class Waitress {
  constructor(private menus: Menu[]) {}

  private _printMenu(iterator: Iterator<MenuItem>): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(
        `${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`
      );
    }
  }

  printMenu(): void {
    console.log(`MENU\n----`);

    for (const menu of this.menus) {
      console.log(`\n${menu.constructor.name}`);
      this._printMenu(menu.createIterator());
    }
  }
}

export { Waitress };
