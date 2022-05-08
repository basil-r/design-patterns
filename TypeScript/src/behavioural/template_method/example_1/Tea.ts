import { CaffeineBeverage } from "./CaffeineBeverage";

class Tea extends CaffeineBeverage {
  brew(): void {
    console.log("Steeping the tea");
  }

  addCondiments(): void {
    console.log("Adding Lemon");
  }
}

export { Tea };
