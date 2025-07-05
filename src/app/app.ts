import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Main } from './components/Main/Main';

@Component({
  selector: 'app-root', //<app-root> u html-u za izgradnju str.
  imports: [Header, Main, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
