import { HasQuarterState } from "./HasQuarterState";
import { NoQuarterState } from "./NoQuarterState";
import { SoldOutState } from "./SoldOutState";
import { SoldState } from "./SoldState";
import { State } from "../abstract/State";
import { WinnerState } from "./WinnerState";

class GumballMachine {
  private soldOutState: State;
  private noQuarterState: State;
  private hasQuarterState: State;
  private soldState: State;
  private winnerState: State;

  private state: State;
  private count: number = 0;

  constructor(numberGumballs: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.winnerState = new WinnerState(this);

    this.count = numberGumballs;

    if (numberGumballs > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  insertQuarter(): void {
    this.state.insertQuarter();
  }

  ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  setState(state: State): void {
    this.state = state;
  }

  releaseBall(): void {
    console.log("A gumball comes rolling out the slot...");
    if (this.count !== 0) {
      this.count--;
    }
  }

  getCount(): number {
    return this.count;
  }

  getSoldOutState(): State {
    return this.soldOutState;
  }

  getHasQuarterState(): State {
    return this.hasQuarterState;
  }

  getSoldState(): State {
    return this.soldState;
  }

  getNoQuarterState(): State {
    return this.noQuarterState;
  }

  getWinnerState(): State {
    return this.winnerState;
  }

  toString(): string {
    return `State: ${this.state.constructor.name}, count: ${this.count}`;
  }
}

export { GumballMachine };
