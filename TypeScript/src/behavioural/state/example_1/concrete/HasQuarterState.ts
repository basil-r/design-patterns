import { GumballMachine } from "./GumballMachine";
import { State } from "../abstract/State";

class HasQuarterState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("You can't insert another quarter");
  }

  ejectQuarter(): void {
    console.log("Quarter returned");
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  turnCrank(): void {
    console.log("You turned...");

    const winner = Math.floor(Math.random() * 11);
    if (winner === 0 && this.gumballMachine.getCount() > 1) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }

  dispense(): void {
    console.log("No gumball dispensed");
  }
}

export { HasQuarterState };
