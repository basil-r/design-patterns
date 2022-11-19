import { Middleware } from "../abstract/Middleware";

class Server {
  private users = new Map<string, string>();
  private middleware!: Middleware;

  public setMiddleware(middleware: Middleware): void {
    this.middleware = middleware;
  }

  public logIn(email: string, password: string): boolean {
    if (this.middleware.check(email, password)) {
      console.log("Authorization have been successful!");

      // Do something useful here for authorized users.

      return true;
    }
    return false;
  }

  public register(email: string, password: string): void {
    this.users.set(email, password);
  }

  public hasEmail(email: string): boolean {
    return this.users.has(email);
  }

  public isValidPassword(email: string, password: string): boolean {
    return this.users.get(email) === password;
  }
}

export { Server };
