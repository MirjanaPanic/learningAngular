import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'about',
    loadComponent: () => {
      return import('./about/about').then((m) => m.AboutComponent);
    },
  },
  {
    path: 'contact',
    loadComponent: () => {
      return import('./contact/contact').then((m) => m.ContactComponent);
    },
  },
];
