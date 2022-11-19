import { Myself } from "./Myself";
import { RainWearingStrategy } from "./RainWearingStrategy";

const me = new Myself();
me.GoOutside();

me.ChangeStrategy(new RainWearingStrategy());
me.GoOutside();