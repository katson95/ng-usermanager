export class User {
  public firstname: string;
  public lastname: string;
  public username: string;
  public password: string;

  constructor(fName: string, lName: string, uName: string, pWord: string) {
    this.firstname = fName;
    this.lastname = lName;
    this.username = uName;
    this.password = pWord;
  }
}