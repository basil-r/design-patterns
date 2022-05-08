import { Observer } from "./Observer";

interface QuackObservable {
  registerObserver(observer: Observer): void;
  notifyObservers(): void;
}

export { QuackObservable };
