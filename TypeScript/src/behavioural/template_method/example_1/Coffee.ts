import readline from "readline";

import { CaffeineBeverage } from "./CaffeineBeverage";

class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log("Dripping Coffee through filter");
  }

  addCondiments(): void {
    console.log("Adding Sugar and Milk");
  }

  async customerWantsCondiments(): Promise<boolean> {
    const userAnswer = await this.getUserInput();

    if (userAnswer.toLowerCase().startsWith("y")) {
      return true;
    } else {
      return false;
    }
  }

  private getUserInput(): Promise<string> {
    let answer: string | undefined;

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((res) => {
      rl.question(
        "Would you like milk and sugar with your coffee (y/n)?\n",
        (input: string) => {
          if (input) {
            answer = input;
          }

          rl.close();
          return res(answer || "no");
        }
      );
    });
  }
}

export { Coffee };
