import { ISubject } from "./ISubject";

interface IObserver {
  Update(subject: ISubject): void;
}

export { IObserver };
