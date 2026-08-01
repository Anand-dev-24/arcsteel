import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Projects } from './pages/projects/projects';
import { Careers } from './pages/careers/careers';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'services',
    component: Services
  },
  {
    path: 'projects',
    component: Projects
  },
  {
    path: 'careers',
    component: Careers
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: '**',
    component: NotFound
  }
];