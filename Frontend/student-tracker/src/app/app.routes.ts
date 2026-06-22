// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: 'login',
//     loadComponent: () =>
//       import('./login/login').then(m => m.LoginComponent)
//   }
// ];


import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./home/home').then(m => m.Home)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login').then(m => m.Login)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./register/register').then(m => m.Register)
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./about-us/about-us').then(m => m.AboutUs)
  },

   {
    path: 'articles',
    loadComponent: () =>
      import('./articles/articles').then(m => m.Articles)
  },

   {
    path: 'add-task',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./add-task/add-task').then(m => m.AddTask)
  },

  {
    path: 'progress',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./progress/progress').then(m => m.Progress)
  }
];