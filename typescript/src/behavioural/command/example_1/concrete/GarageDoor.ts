class GarageDoor {
  up(): void {
    console.log("Garage door is open");
  }

  down(): void {
    console.log("Garage door is close");
  }

  stop(): void {
    console.log("Garage door is pause");
  }

  lightOn(): void {
    console.log("Garage light is on");
  }

  lightOff(): void {
    console.log("Garage light is off");
  }
}

export { GarageDoor };
