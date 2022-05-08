import { DinerMenuIterator } from "./DinerMenuIterator";
import { Iterator } from "../abstract/Iterator";
import { Menu } from "../abstract/Menu";
import { MenuItem } from "./MenuItem";

class DinerMenu implements Menu {
  private static readonly MAX_ITEMS: number = 6;
  private numberOfItems: number = 0;
  private menuItems: MenuItem[];

  constructor() {
    this.menuItems = Array(DinerMenu.MAX_ITEMS);

    this.addItem(
      "Vegetarian BLT",
      "(Fakin') Bacon with lettuce & tomato on whole wheat",
      true,
      2.99
    );

    this.addItem(
      "BLT",
      "Bacon with lettuce & tomato on whole wheat",
      false,
      2.99
    );

    this.addItem(
      "Soup of the day",
      "Soup of the day, with a side of potato salad",
      false,
      3.29
    );

    this.addItem(
      "Hotdog",
      "A hot dog, with saurkraut, relish, onions, topped with cheese",
      false,
      3.05
    );
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price);

    if (this.numberOfItems >= DinerMenu.MAX_ITEMS) {
      console.log("Sorry, menu is full! Can't add item to menu");
    } else {
      this.menuItems[this.numberOfItems] = menuItem;
      this.numberOfItems = this.numberOfItems + 1;
    }
  }

  createIterator(): Iterator<MenuItem> {
    return new DinerMenuIterator(this.menuItems);
  }
}

export { DinerMenu };
