import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../../../layout/header/header';
import { Footer } from '../../../../layout/footer/footer';

@Component({
  selector: 'app-dashboard',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
