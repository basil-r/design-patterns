import { Subject } from "./subject";

interface Observer {
  update(subject: Subject): void;
}

export { Observer };
