class MenuItem {
  constructor(
    private name: string,
    private description: string,
    private vegetarian: boolean,
    private price: number
  ) {}

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  isVegetarian(): boolean {
    return this.vegetarian;
  }
}

export { MenuItem };
