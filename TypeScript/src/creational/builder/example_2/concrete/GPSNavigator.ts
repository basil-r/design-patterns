class GPSNavigator {
  private route: string;

  constructor(manualRoute?: string) {
    if (manualRoute !== undefined) {
      this.route = manualRoute;
    } else {
      this.route =
        "221b, Baker Street, London  to Scotland Yard, 8-10 Broadway, London";
    }
  }

  getRoute(): string {
    return this.route;
  }
}

export { GPSNavigator };
