import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root', //<app-root> u html-u za izgradnju str.
  standalone: true, //do Ng v14 su se koristili moduli za registrovanje komponenti
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {}
