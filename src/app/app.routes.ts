import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'detail-worker',
    loadComponent: () => import('./pages/detail-worker/detail-worker.page').then( m => m.DetailWorkerPage)
  },
  {
    path: 'appointment',
    loadComponent: () => import('./pages/appointment/appointment.page').then( m => m.AppointmentPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'administration',
    loadComponent: () => import('./pages/administration/administration.page').then( m => m.AdministrationPage)
  },
  {
    path: 'register-worker',
    loadComponent: () => import('./pages/register-worker/register-worker.page').then( m => m.RegisterWorkerPage)
  },
];
