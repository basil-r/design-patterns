class Car {
  protected brandName!: string;
  
  Go(): void {
    console.log(`I'm ${this.brandName} and I'm on my way...`);
  }
}

export { Car };
