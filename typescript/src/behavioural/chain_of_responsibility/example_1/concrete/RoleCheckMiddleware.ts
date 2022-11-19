import { Middleware } from "../abstract/Middleware";

class RoleCheckMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (email === "admin@example.com") {
      console.log("Hello, admin!");
      return true;
    }
    console.log("Hello, user!");
    return this.checkNext(email, password);
  }
}

export { RoleCheckMiddleware };
