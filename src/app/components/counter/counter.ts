import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/counter.actions';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class CounterComponent {
  count$: Observable<number>;

  //koriste se posebni selektori, ali moze i ovako
  constructor(private store: Store<{ count: number }>) {
    //store je referenca na centralizovani store
    //komponenta se pretplatila na promenu stanja
    //cim se azurira stanje tamo u centralizovani store
    //komponente koje su preplacene ce reagovati

    this.count$ = store.select((state) => state.count);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
