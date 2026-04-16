import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

/**
 * Auth Service
 * Manages user authentication state, tokens, and roles.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly ROLE_KEY = 'user_role';

  constructor(private storageService: StorageService) {}

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return this.storageService.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    this.storageService.setItem(this.TOKEN_KEY, token);
  }

  getUserRole(): string {
    return this.storageService.getItem(this.ROLE_KEY) || 'GUEST';
  }

  logout(): void {
    this.storageService.removeItem(this.TOKEN_KEY);
    this.storageService.removeItem(this.ROLE_KEY);
  }
}
