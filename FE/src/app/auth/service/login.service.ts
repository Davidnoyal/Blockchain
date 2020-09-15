import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = '';
  constructor(private http: HttpClient) { }

  login(loginData): any {
    return this.http.post(this.baseUrl, { username: loginData.username, password: loginData.password });
  }
}
