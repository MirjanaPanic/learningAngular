import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export const initialState = 0;

//ovo je reducer funkcija samo za count stanje! zato sto kaze kako se menja initialState.
//mozemo imati za svako stanje reducer funkcije.
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
