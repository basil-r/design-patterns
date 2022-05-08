import { Observer } from "../abstract/Observer";
import { Subject } from "../abstract/Subject";
import { ConcreteSubject } from "./ConcreteSubject";

class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (
      subject instanceof ConcreteSubject &&
      (subject.state === 0 || subject.state >= 2)
    ) {
      console.log("ConcreteObserverB: Reacted to the event.");
    }
  }
}

export { ConcreteObserverB };
