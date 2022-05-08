import { IWallCreator } from "./IWallCreator";

interface IBuldingCompany {
  BuildFoundation(): void;
  BuildRoom(): void;
  BuildRoof(): void;
  getWallCreator(): IWallCreator;
  setWallCreator(wallCreator: IWallCreator): void;
}

export { IBuldingCompany };
