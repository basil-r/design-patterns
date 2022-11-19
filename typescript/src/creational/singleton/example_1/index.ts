import { ChocolateBoiler } from "./ChocolateBoiler";

const choco = ChocolateBoiler.getInstance();
const choco2 = ChocolateBoiler.getInstance();

console.log("choco === choco2", choco === choco2);
