import { Component, Inject } from '@angular/core';
import { UserPreferenceService } from 'shared-core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  bgColorClass = 'bg-primary';

  constructor(@Inject(UserPreferenceService) private userPreferenceService: UserPreferenceService) {
    
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
}
