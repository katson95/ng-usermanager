import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';

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
  usedAttempts: number;

  msgs: Message[] = [];

  constructor() {
    this.usedAttempts = 0;
  }

  ngOnInit() {
    this.resultValue = this.generateRandomNumber(this.minimumValue, this.maximumValue);
    console.log('Generated value is: ' + this.resultValue);
  }

  generateRandomNumber(minimumValue: number, maximumValue: number): number {
    return Math.floor(Math.random() * (maximumValue - minimumValue)) + minimumValue;
  }

  onCheckResult(userInput: HTMLInputElement) {
    this.userValue = Number(userInput.value);
    /**
     * At this point a proper call can be made to the backend to store user guessed result
     */
    this.msgs = [];

    console.log('User Input value: ' + this.userValue);
    this.usedAttempts++;

    if (this.userValue !== this.resultValue) {
      this.msgs.push({ severity: 'info', summary: 'Wrong!', detail: 'Attempts made: ' + (this.usedAttempts) + ' please try again' });
    } else {
      this.msgs.push({ severity: 'success', summary: 'Bingo!', detail: 'You got it..' });
    }

  }

}
