import { Iterator } from "./Iterator";
import { MenuItem } from "../concrete/MenuItem";

interface Menu {
  createIterator(): Iterator<MenuItem>;
}

export { Menu };
