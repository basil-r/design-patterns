import { Subject } from "./subject.mjs";

const subject = new Subject();

const observer = {
  update(x) {
    console.log("x", x);
  },
};

subject.attach(observer);
subject.attach({ update: (y) => console.log("y", y) });

const subscription = subject.attach({ update: (w) => console.log("w", w) });

subject.do();
subject.do();

subject.detach(observer);

subject.do();

subscription.detach();

subject.do();
