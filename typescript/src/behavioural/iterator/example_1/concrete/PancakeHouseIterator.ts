import { Iterator } from "../abstract/Iterator";
import { MenuItem } from "./MenuItem";

class PancakeHouseIterator implements Iterator<MenuItem> {
  private items: Set<MenuItem>;
  private position: number = 0;

  constructor(items: Set<MenuItem>) {
    this.items = items;
  }

  hasNext(): boolean {
    if (this.position >= this.items.size) {
      return false;
    } else {
      return true;
    }
  }

  next(): MenuItem {
    let menuItem: MenuItem;
    let index = 0;

    for (let item of this.items) {
      if (index === this.position) {
        menuItem = item;
        this.position = this.position + 1;
        break;
      }

      index++;
    }

    return menuItem!;
  }
}

export { PancakeHouseIterator };
