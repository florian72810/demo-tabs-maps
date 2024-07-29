import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'other',
    loadComponent: () => import('./other/other.page').then( m => m.OtherPage)
  },
];
