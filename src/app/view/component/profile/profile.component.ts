import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  minimumValue: number = 1;
  maximumValue: number = 6;
  resultValue: number;

  userValue: number;

  constructor() { }

  ngOnInit() {
    this.resultValue = this.generateRandomNumber(this.minimumValue, this.maximumValue);
    console.log('Generated value is: ' + this.resultValue);
  }

  generateRandomNumber(minimumValue: number, maximumValue: number): number {
    return Math.floor(Math.random() * (maximumValue - minimumValue)) + minimumValue;
  }

  onCheckResult(userInput: HTMLInputElement) {
    console.log('User Input value: ' + userInput.value);
    this.userValue = Number(userInput.value);
  }

}
