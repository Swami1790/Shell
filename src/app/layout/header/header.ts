import { Component, Inject, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserPreferenceService } from 'shared-core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  bgColorClass = 'bg-primary';

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    @Inject(UserPreferenceService) private userPreferenceService: UserPreferenceService
  ) {
    
    userPreferenceService.preference$.subscribe((data) => {
      this.ngZone.run(() => {
        this.setBgColorClass(data.primaryColor);
        this.cdr.detectChanges();
      });
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
