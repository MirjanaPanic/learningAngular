import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

//Reducers are pure functions in that they produce the same output for a given input
//immutable
export const initialState: number = 0;

//ovo je reducer funkcija samo za count stanje! zato sto kaze kako se menja initialState.
//mozemo imati za svako stanje reducer funkcije.
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

//reducer treba biti cista funkcija - vraca novi objekat a ne menja postojeci!!!(SPREAD operator)
