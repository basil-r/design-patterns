import { CeilingFan } from "./concrete/CeilingFan";
import { CeilingFanOffCommand } from "./concrete/CeilingFanOffCommand";
import { CeilingFanMediumCommand } from "./concrete/CeilingFanMediumCommand";
import { CeilingFanHighCommand } from "./concrete/CeilingFanHighCommand";
import { CeilingFanLowCommand } from "./concrete/CeilingFanLowCommand";
import { GarageDoor } from "./concrete/GarageDoor";
import { GarageDoorDownCommand } from "./concrete/GarageDoorDownCommand";
import { GarageDoorUpCommand } from "./concrete/GarageDoorUpCommand";
import { Light } from "./concrete/Light";
import { LightOffCommand } from "./concrete/LightOffCommand";
import { LightOnCommand } from "./concrete/LightOnCommand";
import { RemoteControl } from "./concrete/RemoteControl";
import { Stereo } from "./concrete/Stereo";
import { StereoOffCommand } from "./concrete/StereoOffCommand";
import { StereoOnWithCDCommand } from "./concrete/StereoOnWithCDCommand";
import { MacroCommand } from "./concrete/MacroCommand";

const remoteControl = new RemoteControl();

const livingRoomLight = new Light("Living Room");
const kitchenLight = new Light("Kitchen");
const ceilingFan = new CeilingFan("Living Room");
const garageDoor = new GarageDoor("");
const stereo = new Stereo("Living Room");

const livingRoomLightOn = new LightOnCommand(livingRoomLight);
const livingRoomLightOff = new LightOffCommand(livingRoomLight);

const kitchenLightOn = new LightOnCommand(kitchenLight);
const kitchenLightOff = new LightOffCommand(kitchenLight);

const ceilingFanHigh = new CeilingFanHighCommand(ceilingFan);
const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

const garageDoorUp = new GarageDoorUpCommand(garageDoor);
const garageDoorDown = new GarageDoorDownCommand(garageDoor);

const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
const stereoOff = new StereoOffCommand(stereo);

const ceilingFanMedium = new CeilingFanMediumCommand(ceilingFan);

const partyOn = [livingRoomLightOn, ceilingFanMedium, stereoOnWithCD];
const partyOff = [livingRoomLightOff, ceilingFanOff, stereoOff];
const partyOnMacro = new MacroCommand(partyOn);
const pertyOffMacro = new MacroCommand(partyOff);

remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
remoteControl.setCommand(2, ceilingFanHigh, ceilingFanOff);
remoteControl.setCommand(3, stereoOnWithCD, stereoOff);
remoteControl.setCommand(4, garageDoorUp, garageDoorDown);
remoteControl.setCommand(5, partyOnMacro, pertyOffMacro);

console.log(`${remoteControl}`);

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.onButtonWasPushed(1);
remoteControl.offButtonWasPushed(1);
remoteControl.onButtonWasPushed(2);
remoteControl.offButtonWasPushed(2);
remoteControl.onButtonWasPushed(3);
remoteControl.offButtonWasPushed(3);
remoteControl.onButtonWasPushed(4);
remoteControl.offButtonWasPushed(4);
remoteControl.onButtonWasPushed(5);
remoteControl.offButtonWasPushed(5);
remoteControl.undoButtonWasPushed();
