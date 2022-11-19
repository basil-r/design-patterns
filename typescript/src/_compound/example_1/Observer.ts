import { QuackObservable } from "./QuackObservable";

interface Observer {
  update(duck: QuackObservable): void;
}

export { Observer };
