import { Iterator } from "../abstract/Iterator";
import { MenuItem } from "./MenuItem";

class DinerMenuIterator implements Iterator<MenuItem> {
  private items: MenuItem[];
  private position: number = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] == null
    ) {
      return false;
    } else {
      return true;
    }
  }

  next(): MenuItem {
    const menuItem = this.items[this.position];
    this.position = this.position + 1;
    return menuItem;
  }
}

export { DinerMenuIterator };
