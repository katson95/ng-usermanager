import { Guess } from './guess.model';

export class User {
  public firstname: string;
  public lastname: string;
  public username: string;
  public password: string;
  public guesses: Guess[];

  constructor(fName: string, lName: string, uName: string, pWord: string, guesses: Guess[]) {
    this.firstname = fName;
    this.lastname = lName;
    this.username = uName;
    this.password = pWord;
    this.guesses = guesses;
  }
}