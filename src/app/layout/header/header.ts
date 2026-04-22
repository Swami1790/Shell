import { Component, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserPreferenceService } from 'shared-core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  bgColorClass = 'bg-primary';

  constructor(private router: Router, private authService: AuthService, @Inject(UserPreferenceService) private userPreferenceService: UserPreferenceService) {
    
    userPreferenceService.preference$.subscribe((data) => {
      this.setBgColorClass(data.primaryColor);
    });
  }

  setBgColorClass(color: string) {
    switch (color) {
      case 'blue':
        this.bgColorClass = 'bg-primary';
        break;
      case 'grey':
        this.bgColorClass = 'bg-secondary';
        break;
      case 'green':
        this.bgColorClass = 'bg-success';
        break;
      case 'yellow':
        this.bgColorClass = 'bg-warning';
        break;
      case 'red':
        this.bgColorClass = 'bg-danger';
        break;
    }
  }

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
