export class Subject {
  #state = 0;
  #observers;

  constructor() {
    this.#observers = new Set();
  }

  #notify() {
    for (const observer of this.#observers) {
      observer.update(this.#state);
    }
  }

  attach(observer) {
    this.#observers.add(observer);

    return { detach: () => this.detach(observer) };
  }

  detach(observer) {
    this.#observers.delete(observer);
  }

  do() {
    console.log("Notify");
    this.#state = Math.trunc(Math.random() * (100 + 1));

    this.#notify();
  }
}
