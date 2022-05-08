import { GumballMachine } from "./concrete/GumballMachine";

const gumballMachine = new GumballMachine(5);

console.log(`\n${gumballMachine}`);

gumballMachine.insertQuarter();
gumballMachine.turnCrank();

console.log(`\n${gumballMachine}`);

gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();

console.log(`\n${gumballMachine}`);
