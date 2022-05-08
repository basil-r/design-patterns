import { Amplifier } from "./Amplifier";
import { CdPlayer } from "./CdPlayer";
import { DvdPlayer } from "./DvdPlayer";
import { PopcornPopper } from "./PopcornPopper";
import { Projector } from "./Projector";
import { TheaterLights } from "./TheaterLights";
import { Tuner } from "./Tuner";
import { Screen } from "./Screen";

class HomeTheaterFacade {
  constructor(
    private amp: Amplifier,
    private tuner: Tuner,
    private dvd: DvdPlayer,
    private cd: CdPlayer,
    private projector: Projector,
    private lights: TheaterLights,
    private screen: Screen,
    private popper: PopcornPopper
  ) {}

  watchMovie(movie: string): void {
    console.log("Get ready to watch a movie...");
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setDvd(this.dvd);
    this.amp.setSurroundSoud();
    this.amp.setVolume(5);
    this.dvd.on();
    this.dvd.play(movie);
  }
  endMovie(): void {
    console.log("Shutting movie theater down...");
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.dvd.stop();
    this.dvd.eject();
    this.dvd.off();
  }
  listenToCd(): void {}
  endCd(): void {}
  listenToRadio(): void {}
  endRadio(): void {}
}

export { HomeTheaterFacade };
