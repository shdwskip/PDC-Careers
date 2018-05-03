import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  public canActivate(): boolean {
    if (this.authService.isAuth()) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
