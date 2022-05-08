import { QuackObservable } from "./QuackObservable";

interface Quackable extends QuackObservable {
  quack(): void;
}

export { Quackable };
