export class Guess {
  public value: number;
  public attempt: number;
  public correct: boolean;

  constructor(value: number, attempt: number, correct: boolean) {
    this.value = value;
    this.attempt = attempt;
    this.correct = correct;
  }
}