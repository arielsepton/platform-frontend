export class User implements User {
  constructor(
    public username: string,
    public password: string
  ) {}

  public toJSON(): Object {
    return {
      username: this.username,
      password: this.password,
    };
  }

  fromJson(json: any): User {
    const user: User = new User(json.username, json.password);
    return user;
  }

  public static clone(user: User): User {
    return new User(user.username, user.password);
  }
}
