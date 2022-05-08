import { IObserver } from "./IObserver";

interface ISubject {
  AttachObserver(observer: IObserver): void;
  DetachObserver(observer: IObserver): void;
  Notify(): void;
}

export { ISubject };
