import { Component, DOCUMENT, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  readonly year = new Date().getFullYear();

  
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  
  readonly quickLinks = [
    {
      displayName: 'Home',
      link: 'home'
    }, {
      displayName: 'About',
      link: 'about'
    }, {
      displayName: 'Services',
      link: 'services'
    }, {
      displayName: 'Projects',
      link: 'projects'
    }, {
      displayName: 'Contact',
      link: 'contact'
    }
  ];

  readonly services = [
    'Steel Detailing',
    'Connection Detailing',
    'BIM Modelling',
    'Shop Drawings',
    'Erection Drawings'
  ];


    scrollTo(id: string): void {
  
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
  
      const section = this.document.getElementById(id);
  
      if (!section) {
        return;
      }
  
      const offset = 85;
  
      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        offset;
  
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
  
    }

}