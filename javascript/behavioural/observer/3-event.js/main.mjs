import eventMixin from "./event.mjs";

const subject = Object.assign(
  {
    do() {
      console.log("Notify");
      const value = Math.trunc(Math.random() * (100 + 1));
      this.emit("update", value);
    },
  },
  eventMixin
);

const observer = (x) => console.log("x", x);

subject.on("update", observer);
subject.on("update", (y) => console.log("y", y));

const subscription = subject.on("update", (w) => console.log("w", w));

subject.do();
subject.do();

subject.off("update", observer);

subject.do();

subject.off("update", subscription);

subject.do();
