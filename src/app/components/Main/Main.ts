import { CommonModule } from '@angular/common';
import { Component, input, signal, WritableSignal } from '@angular/core';

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
  count = signal(0);
  display: boolean = true;

  title: WritableSignal<string> = signal('Prva komponenta');

  receivedMessage = input(); //prima poruku od roditelja

  increment() {
    this.count.update((val) => val + 1);
  }
  decrement() {
    this.count.update((val) => val - 1);
  }
  reset() {
    this.count.update((val) => 0);
  }

  changeDisplay() {
    this.display = !this.display;
  }
}
