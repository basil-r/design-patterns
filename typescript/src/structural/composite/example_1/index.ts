import { Waitress } from "./concrete/Waitress";
import { Menu } from "./concrete/Menu";
import { MenuComponent } from "./abstract/MenuComponent";
import { MenuItem } from "./concrete/MenuItem";

const pancakeHouseMenu: MenuComponent = new Menu(
  "PANCAKE HOUSE MENU",
  "Breakfast"
);
const dinerMenu: MenuComponent = new Menu("DINER MENU", "Lunch");
const cafeMenu: MenuComponent = new Menu("CAFE MENU", "Dinner");
const dessertMenu: MenuComponent = new Menu(
  "DESSERT MENU",
  "Dessert of course!"
);

const allMenus: MenuComponent = new Menu("ALL MENUS", "All menus combined");

allMenus.add(pancakeHouseMenu);
allMenus.add(dinerMenu);
allMenus.add(cafeMenu);

dinerMenu.add(
  new MenuItem(
    "Pasta",
    "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
    true,
    3.99
  )
);

dinerMenu.add(dessertMenu);

dessertMenu.add(
  new MenuItem(
    "Apple Pie",
    "Apple pie with a flakey crust, topped with vanilla icecream",
    true,
    1.59
  )
);

const waitress = new Waitress(allMenus);
waitress.printMenu();
