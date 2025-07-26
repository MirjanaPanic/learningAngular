import { createAction } from '@ngrx/store';

// tip akcije:  [Source] Event
// source - koji deo sistema salje akciju (UI, API, effect, service,..)
// props su vidljivi u Redux devtools pa ne treba slati osetljive podatke tu(lozinke, tokeni,..)

//samo se navode ovde, a implementiraju se u komponentama koje ih koriste
export const increment = createAction('[Counter Component] Increment'); //increment()
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
