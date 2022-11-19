abstract class CaffeineBeverage {
  async prepareRecipe(): Promise<void> {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (await this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  private boilWater(): void {
    console.log("Boiling water");
  }

  private pourInCup(): void {
    console.log("Pouring into cup");
  }

  protected async customerWantsCondiments(): Promise<boolean> {
    return true;
  }

  abstract brew(): void;
  abstract addCondiments(): void;
}

export { CaffeineBeverage };
