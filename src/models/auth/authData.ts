export class AuthData {
  constructor(
    public token: string,
    public user: string
  ) {}

  public static parseJson(data: any): AuthData {
    const user: AuthData = new AuthData(data.username, data.password);
    return user;
  }

  public toJSON(): Object {
    return {
      user: this.user,
      token: this.token,
    };
  }

  public static clone(user: AuthData): AuthData {
    return new AuthData(user.user, user.token);
  }
}
