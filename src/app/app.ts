import { Component } from '@angular/core';
import { MyFirstComponent } from './my-first-component/my-first-component';

@Component({
  selector: 'app-root', //<app-root> u html-u za izgradnju str.
  imports: [MyFirstComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected poruka = 'Javljam se iz root komponente!! :))';
  
}
