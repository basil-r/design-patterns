import { AbstractDuckFactory } from "./AbstractDuckFactory";
import { CountingDuckFactory } from "./CountingDuckFactory";
import { DuckSimulator } from "./DuckSimulator";

const simulator = new DuckSimulator();
const duckFactory: AbstractDuckFactory = new CountingDuckFactory();
simulator.simulate(duckFactory);
