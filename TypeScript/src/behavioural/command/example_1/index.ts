import { GarageDoor } from "./concrete/GarageDoor";
import { GarageDoorOpenCommand } from "./concrete/GarageDoorOpenCommand";
import { Light } from "./concrete/Light";
import { LightOnCommand } from "./concrete/LightOnCommand";
import { SimpleRemoteControl } from "./concrete/SimpleRemoteControl";

const light = new Light();
const lightOn = new LightOnCommand(light);
const garageDoor = new GarageDoor();
const garageOpen = new GarageDoorOpenCommand(garageDoor);

const remote = new SimpleRemoteControl();

remote.setCommand(lightOn);
remote.buttonWasPressed();

remote.setCommand(garageOpen);
remote.buttonWasPressed();
