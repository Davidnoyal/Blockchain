import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  constructor() { }

  ngOnInit(): void {
  }

  login(): void{
   console.log('Login');
  }

  formValidate(): boolean{
    return false;
  }
}