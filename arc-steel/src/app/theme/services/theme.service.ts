import { Injectable, Renderer2, RendererFactory2, effect, signal } from '@angular/core';
import { ThemeMode } from '../theme.types';

const STORAGE_KEY = 'app-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  readonly themeMode = signal<ThemeMode>('light');

  private readonly renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);

    const savedTheme = (localStorage.getItem(STORAGE_KEY) as ThemeMode | null);

    if (savedTheme) {
      this.themeMode.set(savedTheme);
    }

    effect(() => {
      this.applyTheme(this.themeMode());
    });
  }

  setTheme(mode: ThemeMode): void {
    this.themeMode.set(mode);
    localStorage.setItem(STORAGE_KEY, mode);
  }

  toggleTheme(): void {
    const next =
      this.themeMode() === 'light'
        ? 'dark'
        : 'light';

    this.setTheme(next);
  }

  private applyTheme(mode: ThemeMode): void {

    this.renderer.removeClass(document.body, 'light-theme');
    this.renderer.removeClass(document.body, 'dark-theme');

    if (mode === 'dark') {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.addClass(document.body, 'light-theme');
    }
  }
}