import { AmbulanceCar } from "./concrete/AmbulanceCar";
import { Mercedes } from "./concrete/Mercedes";
import { RaceCar } from "./concrete/RaceCar";

const doctorsDream = new RaceCar(new AmbulanceCar(new Mercedes()));
doctorsDream.Go();
