import { CafeMenu } from "./concrete/CafeMenu";
import { DinerMenu } from "./concrete/DinerMenu";
import { PancakeHouseMenu } from "./concrete/PancakeHouseMenu";
import { Waitress } from "./concrete/Waitress";

const menus = [new PancakeHouseMenu(), new DinerMenu(), new CafeMenu()];

const waitress = new Waitress(menus);
waitress.printMenu();
