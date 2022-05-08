import { Iterator } from "../abstract/Iterator";
import { MenuItem } from "./MenuItem";

class CafeMenuIterator implements Iterator<MenuItem> {
  position: number = 0;

  constructor(private items: Map<string, MenuItem>) {}

  hasNext(): boolean {
    if (this.position >= this.items.size) {
      return false;
    } else {
      return true;
    }
  }

  next(): MenuItem {
    let index = 0;
    let menuItem: MenuItem;

    for (const key of this.items.keys()) {
      if (index === this.position) {
        menuItem = this.items.get(key)!;
        this.position = this.position + 1;
        break;
      }

      index++;
    }

    return menuItem!;
  }
}

export { CafeMenuIterator };
