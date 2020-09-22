import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  firstname: any;
  lastname: any;
  role: any;
  roles: any = [
    'Store Keeper',
    'Processing Unit Manager',
  ];
  location: any;
  locationList: any = [
    'Annesbrook',
    'Atawhai',
    'Beachville',
    'Bishopdale',
    'Britannia Heights',
    'Enner Glynn',
    'Maitai',
    'Marybank',
    'Moana',
    'Monaco',
    'Nelson',
    'Nelson Airport',
    'Nelson South',
    'Port Nelson',
    'Stepneyville',
    'Stoke',
    'Tahunanui',
    'The Brook',
    'The Wood',
    'Toi Toi',
    'Wakatu',
    'Washington Valley'
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signup(): void {
    console.log('Signup');
    this.router.navigate(['/dashboard']);
  }

  formValidate(): boolean {
    if (
      (this.firstname === '' || this.firstname === undefined) ||
      (this.lastname === '' || this.lastname === undefined) ||
      (this.username === '' || this.username === undefined) ||
      (this.email === '' || this.email === undefined) ||
      (this.contact === '' || this.contact === undefined) ||
      (this.password === '' || this.password === undefined) ||
      (this.confpassword === '' || this.confpassword === undefined) ||
      (this.role === '' || this.role === undefined)

    ) {
      return true;
    } else {
      return false;
    }
  }
}
