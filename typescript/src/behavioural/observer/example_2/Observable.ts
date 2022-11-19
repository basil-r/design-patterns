import { Observer } from "./Observer";

class Observable {
  private changed: boolean = false;
  private observers: Observer[] = [];

  addObserver(o: Observer): void {
    this.observers.push(o);
  }

  deleteObserver(o: Observer): void {
    const i = this.observers.indexOf(o);

    if (i > -1) {
      this.observers.splice(i, 1);
    }
  }

  notifyObservers(arg?: object): void {
    if (this.changed) {
      this.observers.forEach((o: Observer): void => {
        o.update(this, arg);
      });

      this.changed = false;
    }
  }

  setChanged(): void {
    this.changed = true;
  }

  clearChanged(): void {
    this.changed = false;
  }

  hasChanged(): boolean {
    return this.changed;
  }
}

export { Observable };
