import { CommonModule } from '@angular/common';
import { Component, input, signal, WritableSignal } from '@angular/core';

//metapodaci za rad ove komponente koju dekorise
@Component({
  selector: 'app-main', //naziv html taga
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
//logika moje komponente
export class MainComponent {
  //props - moze ih html koristiti za prikaz
  message: string = 'Hello world!';
  display: boolean = true;

  count = signal(0);
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
