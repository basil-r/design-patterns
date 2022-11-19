import { Iterator } from "./Iterator";

interface Aggregator {
  getIterator(): Iterator<string>;
}

export { Aggregator };
