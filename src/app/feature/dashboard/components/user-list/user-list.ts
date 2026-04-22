import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserPreferenceService } from 'shared-core';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  users = [
  {
    id: 1,
    name: 'Prabjot',
    email: 'Prabjot@example.com',
    role: 'Admin',
    status: 'Active',
    location: 'Ganganagar'
  },
  {
    id: 2,
    name: 'Bob',
    email: 'Bob@example.com',
    role: 'User',
    status: 'Active',
    location: 'Mumbai'
  },
  {
    id: 3,
    name: 'Code Chef',
    email: 'codechef@example.com',
    role: 'Manager',
    status: 'Inactive',
    location: 'Bangalore'
  },
  {
    id: 4,
    name: 'Alex',
    email: 'sneha.kapoor@example.com',
    role: 'User',
    status: 'Active',
    location: 'Pune'
  },
  {
    id: 5,
    name: 'Adam',
    email: 'adam@example.com',
    role: 'Admin',
    status: 'Inactive',
    location: 'Jaipur'
  },
  {
    id: 6,
    name: 'Brock',
    email: 'Brock@example.com',
    role: 'User',
    status: 'Active',
    location: 'Chandigarh'
  }
  ];
  currentTheme!: string;

  constructor(private userPreferenceService: UserPreferenceService) {
    this.currentTheme = userPreferenceService.defaultPreference.theme;
    
    userPreferenceService.preference$.subscribe((data) => {
      this.currentTheme = data.theme;
    });
  }
}
