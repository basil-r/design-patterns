import { Number } from "./concrete/Number";

const number20 = new Number(20);

console.log(
  `The first double number: ${number20.double()}\nSThe second double number: ${number20
    .next()
    .double()}`
);
