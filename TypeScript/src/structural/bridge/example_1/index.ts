import { BrickWallCreator } from "./concrete/BrickWallCreator";
import { BuldingCompany } from "./concrete/BuldingCompany";
import { ConcreteSlabWallCreator } from "./concrete/ConcreteSlabWallCreator";

const brickWallCreator = new BrickWallCreator();
const conctreteSlabWallCreator = new ConcreteSlabWallCreator();

const buildingCompany = new BuldingCompany();

buildingCompany.BuildFoundation();

buildingCompany.setWallCreator(brickWallCreator);
buildingCompany.BuildRoom();

buildingCompany.setWallCreator(conctreteSlabWallCreator);
buildingCompany.BuildRoom();
buildingCompany.BuildRoom();

buildingCompany.BuildRoof();
