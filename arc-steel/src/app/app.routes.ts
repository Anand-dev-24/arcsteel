import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
        title: 'Home'
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent),
        title: 'About Us'
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./pages/services/services.component').then((m) => m.ServicesComponent),
        title: 'Services'
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
        title: 'Projects'
      },
      {
        path: 'careers',
        loadComponent: () =>
          import('./pages/careers/careers.component').then((m) => m.CareersComponent),
        title: 'Careers'
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then((m) => m.ContactComponent),
        title: 'Contact'
      }
    ]
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page Not Found'
  }
];