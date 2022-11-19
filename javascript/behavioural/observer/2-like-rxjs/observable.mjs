class Observer {
  #next;
  #error;
  #complete;
  #stopped = false;

  constructor(observer) {
    const { next, complete, error } = observer ?? {};

    this.#next = next ?? (() => {});
    this.#error = error ?? (() => {});
    this.#complete = complete ?? (() => {});
  }

  next(value) {
    if (!this.#stopped) this.#next(value);
  }

  complete() {
    if (!this.#stopped) {
      this.#stopped = true;
      this.#complete();
    }
  }

  error(err) {
    if (!this.#stopped) {
      this.#stopped = true;
      this.#error(err);
    }
  }

  unsubscribe() {
    this.#stopped = true;
  }
}

export class Observable {
  #handler;

  constructor(handler) {
    this.#handler = handler;
  }

  subscribe(observer) {
    const safeObserver = new Observer(observer);

    if (this.#handler) this.#handler(safeObserver);

    return {
      unsubscribe: () => safeObserver.unsubscribe(),
    };
  }
}
