import { MenuItem } from "./MenuItem";
import { CafeMenuIterator } from "./CafeMenuIterator";
import { Iterator } from "../abstract/Iterator";
import { Menu } from "../abstract/Menu";

class CafeMenu implements Menu {
  private menuItems: Map<string, MenuItem>;

  constructor() {
    this.menuItems = new Map<string, MenuItem>();

    this.addItem(
      "Veggie Burger and Air Fries",
      "Veggie burger on a whole wheat bun, lettuce, tomato, and fries",
      true,
      3.99
    );

    this.addItem(
      "Soup of the day",
      "A cup of the soup of the day, with a side salad",
      false,
      3.69
    );

    this.addItem(
      "Burrito",
      "A large burrito, with whole pinto beans, salsa, guacamole",
      true,
      4.29
    );
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.set(menuItem.getName(), menuItem);
  }

  createIterator(): Iterator<MenuItem> {
    return new CafeMenuIterator(this.menuItems);
  }
}

export { CafeMenu };
