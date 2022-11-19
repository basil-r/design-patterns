import { Adapter } from "./concrete/Adapter";
import { ElectricityConsumer } from "./concrete/ElectricityConsumer";
import { NewElectricitySystem } from "./concrete/NewElectricitySystem";
import { OldElectricitySystem } from "./concrete/OldElectricitySystem";

const newElectricitySystem = new NewElectricitySystem();
ElectricityConsumer.ChargeNotebook(newElectricitySystem);

const oldElectricitySystem = new OldElectricitySystem();
const adapter = new Adapter(oldElectricitySystem);
ElectricityConsumer.ChargeNotebook(adapter);
