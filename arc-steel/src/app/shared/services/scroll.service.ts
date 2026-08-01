import {
  Injectable,
  PLATFORM_ID,
  inject,
  signal
} from '@angular/core';

import {
  DOCUMENT,
  isPlatformBrowser
} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  readonly isScrolled = signal(false);

  readonly activeSection = signal('home');

  readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly headerOffset = 90;

  updateScrollState(): void {

    if (!this.isBrowser) return;

    this.isScrolled.set(window.scrollY > 40);

    this.updateActiveSection();

  }

  scrollTo(id: string): void {

    if (!this.isBrowser) return;

    const element = this.document.getElementById(id);

    if (!element) return;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      this.headerOffset;

    window.scrollTo({

      top,

      behavior: 'smooth'

    });

  }

  private updateActiveSection(): void {

    if (!this.isBrowser) return;

    const ids = [
      'home',
      'about',
      'services',
      'projects',
      'contact'
    ];

    const scroll = window.scrollY + 150;

    for (const id of ids) {

      const section = this.document.getElementById(id);

      if (!section) continue;

      const top = section.offsetTop;

      const bottom = top + section.offsetHeight;

      if (scroll >= top && scroll < bottom) {

        this.activeSection.set(id);

        break;

      }

    }

  }

}