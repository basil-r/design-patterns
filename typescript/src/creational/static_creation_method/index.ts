import { DB } from "./concrete/DB";
import { User } from "./concrete/User";

const store = {
  users: {
    a1: {
      id: "a1",
      name: "userA1",
      email: "usera1@email.com",
      phone: "123-45-67",
    },
    a2: {
      id: "a2",
      name: "userA2",
      email: "usera2@email.com",
      phone: "123-45-67",
    },
  },
};

const db = new DB(store);

const userFromDb = User.load("a1", db);
console.log(userFromDb.info());

const user = new User("b1", "userB", "userb@email.com", "123-45-89");
console.log(user.info());
