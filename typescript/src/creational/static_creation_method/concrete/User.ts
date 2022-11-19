import { DB } from "./DB";

class User {
  private id: string;
  private name: string;
  private email: string;
  private phone: string;

  constructor(id: string, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  public static load($id: string, db: DB) {
    const { id, email, name, phone } = db.loadData("users", $id);

    return new User(id, name, email, phone);
  }

  public info(): string {
    return `User ${this.id}: name - ${this.name}, email - ${this.email}, phone = ${this.phone}`;
  }
}

export { User };
