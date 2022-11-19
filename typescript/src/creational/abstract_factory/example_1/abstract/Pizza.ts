import { Cheese } from "./Cheese";
import { Clams } from "./Clams";
import { Dough } from "./Dough";
import { Pepperoni } from "./Pepperoni";
import { Sauce } from "./Sauce";
import { Veggies } from "./Veggies";

abstract class Pizza {
  protected name!: string;
  protected dough!: Dough;
  protected sauce!: Sauce;
  protected veggies!: Veggies[];
  protected cheese!: Cheese;
  protected pepperoni!: Pepperoni;
  protected clam!: Clams;

  bake(): void {
    console.log("Bake for 25 minutes at 350");
  }

  cut(): void {
    console.log("Cutting the pizza into diagonal slices");
  }

  box(): void {
    console.log("Place pizza in official PizzaStore box");
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  toString(): string {
    return `${this.name}`;
  }

  abstract prepare(): void;
}

export { Pizza };
