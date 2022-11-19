import { IWallCreator } from "../abstract/IWallCreator";

class ConcreteSlabWallCreator implements IWallCreator {
  BuildWallWithDoor(): void {
    console.log("Concrete slab wall with door");
  }

  BuildWall(): void {
    console.log("Concrete slab wall");
  }

  BuildWallWithWindow(): void {
    console.log("Concrete slab wall with window");
  }
}

export { ConcreteSlabWallCreator };
