import { Observable } from "./Observable";

interface Observer {
  update(o: Observable, arg?: object): void;
}

export { Observer };
