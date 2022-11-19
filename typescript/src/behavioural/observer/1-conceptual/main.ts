import { ConcreteObserverA } from "./concrete/concrete-observer-a";
import { ConcreteObserverB } from "./concrete/concrete-observer-b";
import { ConcreteSubject } from "./concrete/concrete-subject";

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
const observer2 = new ConcreteObserverB();

subject.attach(observer1);
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();
