import { CommonModule } from '@angular/common';
import { Component, input, signal, WritableSignal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../store/counter.actions';

//metapodaci za rad ove komponente koju dekorise
@Component({
  selector: 'app-home', //naziv html taga
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
//logika moje komponente
export class HomeComponent {
  //props - moze ih html koristiti za prikaz
  //po defaultu su PUBLIC - da bi mogle iz svog html fajla(template-a) da se koriste!
  message: string = 'Hello world!';
  display: boolean = true;
  title: WritableSignal<string> = signal('Prva komponenta');
  receivedMessage = input(); //prima poruku od roditelja

  //count = signal(0);
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  /* increment() {
    this.count.update((val) => val + 1);
  }
  decrement() {
    this.count.update((val) => val - 1);
  }
  reset() {
    this.count.update((val) => 0);
  } */

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  changeDisplay() {
    this.display = !this.display;
  }
}
