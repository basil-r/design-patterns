abstract class Middleware {
  private next!: Middleware;

  public linkWith(next: Middleware): Middleware {
    this.next = next;
    return next;
  }

  public abstract check(email: string, password: string): boolean;

  protected checkNext(email: string, password: string): boolean {
    if (this.next == null) {
      return true;
    }
    return this.next.check(email, password);
  }
}

export { Middleware };
