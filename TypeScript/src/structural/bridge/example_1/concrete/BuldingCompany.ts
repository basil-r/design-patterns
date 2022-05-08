import { IBuldingCompany } from "../abstract/IBuldingCompany";
import { IWallCreator } from "../abstract/IWallCreator";

class BuldingCompany implements IBuldingCompany {
  private wallCreator!: IWallCreator;

  BuildFoundation(): void {
    console.log(`Foundation is built`);
  }

  BuildRoom(): void {
    this.wallCreator.BuildWallWithDoor();
    this.wallCreator.BuildWall();
    this.wallCreator.BuildWallWithWindow();
    this.wallCreator.BuildWall();

    console.log(`Room finished`);
  }

  BuildRoof(): void {
    console.log(`Roof is done`);
  }

  getWallCreator(): IWallCreator {
    return this.wallCreator;
  }

  setWallCreator(wallCreator: IWallCreator): void {
    this.wallCreator = wallCreator;
  }
}

export { BuldingCompany };
