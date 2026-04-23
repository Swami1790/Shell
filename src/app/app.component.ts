import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    window.addEventListener('navigate-to-shell', (event: Event) => {
      const customEvent = event as CustomEvent<{ path: string; token: any }>;
      const path = customEvent.detail.path;
      const token = customEvent.detail.token;
      console.log('navigate-to-shell event:', path, token);
      this.authService.setToken(token.accessToken);
      this.router.navigate([path]);
    });
  }
}
