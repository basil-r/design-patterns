import { Bear } from "./Bear";
import { Cat } from "./Cat";

interface IToyFactory {
  GetBear(): Bear;
  GetCat(): Cat;
}

export { IToyFactory };
