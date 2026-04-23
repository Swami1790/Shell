import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, Inject } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { UserPreferenceService } from 'shared-core';

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './react-wrapper.html',
  styleUrl: './react-wrapper.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReactWrapper implements OnInit {
  constructor(@Inject(UserPreferenceService) private userPreferenceService: UserPreferenceService) {}

  async ngOnInit() {
    try {
      await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4204/assets/remoteEntry.js',
        exposedModule: './App',
      });  
          
      const element = document.querySelector('react-mfe-remote-tag');
      if (element) {
        (element as any).preferenceService = this.userPreferenceService;
      }
    } catch (error) {
      console.error('Error loading React MFE:', error);
    }
  }
}
