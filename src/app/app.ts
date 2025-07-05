import { Component } from '@angular/core';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root', //<app-root> u html-u za izgradnju str.
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected poruka = 'Javljam se iz root komponente!! :))';
}
