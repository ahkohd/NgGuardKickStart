import { Injectable } from '@angular/core';
import AuthService from '../services/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthService {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      // if user is already signed in, redirect to dashboard...
      this.router.navigate(['/dashboard']);
      return false;
    } else {
      // let the user see the log in page..
      return true;
    }
  }
}
