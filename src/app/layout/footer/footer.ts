import { Component, Inject, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPreferenceService } from 'shared-core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  bgColorClass = 'bg-primary';

  constructor(
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
}
