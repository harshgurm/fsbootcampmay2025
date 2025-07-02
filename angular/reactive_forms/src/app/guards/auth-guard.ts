import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login-service';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

  loginService = inject(LoginService);
  router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Auth', this.loginService.isAuthenticated())
    if(this.loginService.isAuthenticated()){
      return true;
    } else {
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}
