import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserPreference } from './user-preference.model';

@Injectable({
  providedIn: 'root',
})
export class UserPreferenceService {
  
  defaultPreference: UserPreference = {
    theme: 'light',
    primaryColor: 'blue'
  }

  private preferenceSubject = new BehaviorSubject(this.defaultPreference);
  preference$ = this.preferenceSubject.asObservable();

  setPreference(data: UserPreference) {
    this.preferenceSubject.next(data);
  }

  get currentPreference() {
    return this.preferenceSubject.value;
  }
}
