import { Middleware } from "./abstract/Middleware";
import { RoleCheckMiddleware } from "./concrete/RoleCheckMiddleware";
import { Server } from "./concrete/Server";
import { UserExistsMiddleware } from "./concrete/UserExistsMiddleware";

function init(server: Server): void {
  server.register("admin@example.com", "admin_pass");
  server.register("user@example.com", "user_pass");

  const middleware: Middleware = new UserExistsMiddleware(server);
  middleware.linkWith(new RoleCheckMiddleware());

  server.setMiddleware(middleware);
}

const server = new Server();

init(server);

server.logIn("admin@example.com", "admin_pass");
server.logIn("user@example.com", "user_pass");
