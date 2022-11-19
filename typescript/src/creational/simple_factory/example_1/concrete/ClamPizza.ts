import { Pizza } from "../abstract/Pizza";

class ClamPizza extends Pizza {
  prepare(): void {
    console.log("Make clam");
  }
}

export { ClamPizza };
