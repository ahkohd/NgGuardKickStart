import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import AuthService from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.authService.decode();
    if (user.Role === next.data.role) {
      return true;
    }

    // navigate to not found page
    this.router.navigate(['/404']);
    return false;
  }

}
