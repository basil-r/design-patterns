import { Observer } from "./observer";

interface Subject {
  attachObserver(observer: Observer): void;
  detachObserver(observer: Observer): void;
  notify(): void;
}

export { Subject };
