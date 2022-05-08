import { Observer } from "../abstract/Observer";
import { Subject } from "../abstract/Subject";
import { ConcreteSubject } from "./ConcreteSubject";

class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log("ConcreteObserverA: Reacted to the event.");
    }
  }
}

export { ConcreteObserverA };
