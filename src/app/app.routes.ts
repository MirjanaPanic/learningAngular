import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home/home').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'about',
    loadComponent: () => {
      return import('./pages/about/about').then((m) => m.AboutComponent);
    },
  },
  {
    path: 'contact',
    loadComponent: () => {
      return import('./pages/contact/contact').then((m) => m.ContactComponent);
    },
  },
  {
    path: 'songs',
    loadComponent: () => {
      return import('./components/songslist/songslist').then(
        (m) => m.SongslistComponent
      );
    },
  },
];
