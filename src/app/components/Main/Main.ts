import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  signal,
  WritableSignal,
} from '@angular/core';

//metapodaci za rad ove komponente koju dekorise
@Component({
  selector: 'app-main', //naziv html taga
  imports: [CommonModule],
  templateUrl: './Main.html',
  styleUrl: './Main.css',
})
//logika moje komponente
export class Main {
  //props - moze ih html koristiti za prikaz
  message: string = 'Hello world!';
  count: number = 0;
  display: boolean = true;
  title: WritableSignal<string> = signal('Prva komponenta');

  receivedMessage = input();

  increment() {
    this.count++;
  }

  changeDisplay() {
    this.display = !this.display;
  }
}
