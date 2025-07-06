import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./main/main').then((m) => m.MainComponent);
    },
  },
  {
    path: 'about',
    loadComponent: () => {
      return import('./about/about').then((m) => m.AboutComponent);
    },
  },
];
