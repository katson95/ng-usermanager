import { User } from '../../../model/user';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, SelectItem } from 'primeng/components/common/api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  msgs: Message[] = [];


  submitted: boolean;

  genders: SelectItem[];

  description: string;

  userList: Array<User> = [];

  constructor() { }

  ngOnInit() {


    this.genders = [];
    this.genders.push({ label: 'Select Gender', value: '' });
    this.genders.push({ label: 'Male', value: 'Male' });
    this.genders.push({ label: 'Female', value: 'Female' });

  }

  addUser(user: User) {
    console.log('Adding user ' + user);

  }

  onSubmit(value: string) {
    this.submitted = true;
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });



  }


}
