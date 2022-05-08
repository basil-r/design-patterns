import { Middleware } from "../abstract/Middleware";
import { Server } from "./Server";

class UserExistsMiddleware extends Middleware {
  private server: Server;

  constructor(server: Server) {
    super();
    this.server = server;
  }

  public check(email: string, password: string): boolean {
    if (!this.server.hasEmail(email)) {
      console.log("This email is not registered!");
      return false;
    }
    if (!this.server.isValidPassword(email, password)) {
      console.log("Wrong password!");
      return false;
    }
    return this.checkNext(email, password);
  }
}

export { UserExistsMiddleware };
