import { Subject } from "../abstract/Subject";

class RealSubject implements Subject {
  public request(): void {
    console.log("RealSubject: Handling request.");
  }
}

export { RealSubject };
