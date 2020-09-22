import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  gettoken(): boolean {
    return !!sessionStorage.getItem('session');
  }
}
