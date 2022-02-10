import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppGuardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.actualUser.token) {
      return true;
    }

    this.router.navigate(['/login']);
    return null;
  }
}
