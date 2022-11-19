import { Facade } from "./concrete/Facade";
import { Subsystem1 } from "./concrete/Subsystem1";
import { Subsystem2 } from "./concrete/Subsystem2";

function clientCode(facade: Facade) {
  console.log(facade.operation());
}

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);

clientCode(facade);
