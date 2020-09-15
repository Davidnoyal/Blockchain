import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log('Login');
    localStorage.setItem('session', 'loggedIn');
    this.router.navigate(['/signup']);
  }

  formValidate(): boolean {
    return false;
  }
}
