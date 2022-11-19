abstract class Pizza {
  bake(): void {
    console.log("Bake");
  }

  cut(): void {
    console.log("Cut");
  }

  box(): void {
    console.log("Box");
  }

  abstract prepare(): void;
}

export { Pizza };
