import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  readonly isMobileMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}