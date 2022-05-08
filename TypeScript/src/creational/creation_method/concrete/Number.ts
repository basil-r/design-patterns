class Number {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  next(): Number {
    return new Number(this.value + 1);
  }

  double(): number {
    return this.value * 2;
  }
}

export { Number };
