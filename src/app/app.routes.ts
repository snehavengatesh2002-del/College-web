import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'Home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'about', title: 'About', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'departments', title: 'Departments', loadComponent: () => import('./pages/departments/departments').then(m => m.Departments) },
  { path: 'faculty', title: 'Faculty', loadComponent: () => import('./pages/faculty/faculty').then(m => m.Faculty) },
  { path: 'events', title: 'Events', loadComponent: () => import('./pages/events/events').then(m => m.Events) },
  { path: 'gallery', title: 'Gallery', loadComponent: () => import('./pages/gallery/gallery').then(m => m.Gallery) },
  { path: 'contact', title: 'Contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  { path: '**', redirectTo: '' },
];
