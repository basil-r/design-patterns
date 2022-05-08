import { Device } from "./abstract/Device";
import { AdvancedRemote } from "./concrete/AdvancedRemote";
import { BasicRemote } from "./concrete/BasicRemote";
import { Radio } from "./concrete/Radio";
import { Tv } from "./concrete/Tv";

function testDevice(device: Device) {
  console.log("Tests with basic remote.");
  const basicRemote = new BasicRemote(device);
  basicRemote.power();
  device.printStatus();

  console.log("Tests with advanced remote.");
  const advancedRemote = new AdvancedRemote(device);
  advancedRemote.power();
  advancedRemote.mute();
  device.printStatus();
}

testDevice(new Tv());
testDevice(new Radio());
