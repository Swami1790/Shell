import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Role Guard
 * Restricts access based on user roles. Works in tandem with routing data.
 */
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles = route.data['expectedRoles'] as Array<string>;
    const userRole = this.authService.getUserRole();

    if (this.authService.isAuthenticated() && expectedRoles.includes(userRole)) {
      return true;
    }

    this.router.navigate(['/unauthorized']);
    return false;
  }
}
