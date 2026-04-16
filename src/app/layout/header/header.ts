import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router, private authService: AuthService) {}
  // Navigate to cart page
  navigateToCart() {
    this.router.navigate(['/view/cart']);
  }
  
  // Navigate to user page
  navigateToUser() {
    this.router.navigate(['/view/user']);
  }

  // Logout
  logout() {
    this.router.navigate(['/login']);
    this.authService.logout();
  }
}
