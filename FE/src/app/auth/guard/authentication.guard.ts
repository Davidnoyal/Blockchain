import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../service/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private Authguardservice: AuthGuardService,
    private router: Router
  ) { }
  canActivate(): boolean {
    if (!this.Authguardservice.gettoken()) {
      this.router.navigate(['/login']);
    }
    return this.Authguardservice.gettoken();
  }
}
