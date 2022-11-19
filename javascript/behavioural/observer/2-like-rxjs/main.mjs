import { Observable } from "./observable.mjs";

const observable = new Observable((subscriber) => {
  console.log("Notify");

  subscriber.next(1);
  subscriber.next(2);

  setTimeout(() => {
    subscriber.next(3);
    subscriber.complete();
  }, 100);
});

observable.subscribe({
  next(x) {
    console.log(`X - ${x}`);
  },

  complete() {
    console.log("Complete");
  },
});

const subscription = observable.subscribe({
  next(y) {
    console.log(`Y - ${y}`);
  },
});

observable.subscribe({
  next(w) {
    console.log(`W - ${w}`);
  },
});

subscription.unsubscribe();
