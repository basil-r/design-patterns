import { IWallCreator } from "../abstract/IWallCreator";

class BrickWallCreator implements IWallCreator {
  BuildWallWithDoor(): void {
    console.log("Brick wall with door");
  }

  BuildWall(): void {
    console.log("Brick wall");
  }

  BuildWallWithWindow(): void {
    console.log("Brick wall with window");
  }
}

export { BrickWallCreator };
