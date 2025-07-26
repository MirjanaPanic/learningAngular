import { createAction } from '@ngrx/store';

// tip akcije:  [Source] Event

//samo se navode ovde, a implementiraju se u komponentama koje ih koriste
export const increment = createAction('[Counter Component] Increment'); //increment()
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
