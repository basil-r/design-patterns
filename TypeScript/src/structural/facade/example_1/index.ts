import { Amplifier } from "./concrete/Amplifier";
import { CdPlayer } from "./concrete/CdPlayer";
import { DvdPlayer } from "./concrete/DvdPlayer";
import { HomeTheaterFacade } from "./concrete/HomeTheaterFacade";
import { Projector } from "./concrete/Projector";
import { Tuner } from "./concrete/Tuner";
import { Screen } from "./concrete/Screen";
import { TheaterLights } from "./concrete/TheaterLights";
import { PopcornPopper } from "./concrete/PopcornPopper";

const tuner = new Tuner();
const cd = new CdPlayer();
const amp = new Amplifier(tuner, cd);
const dvd = new DvdPlayer();
const projector = new Projector(dvd);
const screen = new Screen();
const lights = new TheaterLights();
const popper = new PopcornPopper();

const homeTheater = new HomeTheaterFacade(
  amp,
  tuner,
  dvd,
  cd,
  projector,
  lights,
  screen,
  popper
);
homeTheater.watchMovie("Raiders of the Lost Ark");
homeTheater.endMovie();
