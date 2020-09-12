import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: any;
  contact: any;
  email: any;
  password: any;
  confpassword: any;
  location: any;
  constructor() { }

  ngOnInit(): void {
  }

  signup(): void {
    console.log('Signup');
  }

  formValidate(): boolean {
    return false;
  }
}
