import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', loadComponent: () => import('./auth/auth.component').then(c => c.AuthComponent)},
  {path: 'gpio', loadComponent: () => import('./gpio/gpio.component').then(c => c.GpioComponent)},
];
