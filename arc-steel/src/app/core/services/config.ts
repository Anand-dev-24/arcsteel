import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SiteConfig } from '../models/site-config';
import { NavigationItem } from '../models/navigation-item';
import { ThemeConfig } from '../models/theme-config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private readonly http = inject(HttpClient);

  readonly site = signal<SiteConfig | null>(null);
  readonly navigation = signal<NavigationItem[]>([]);
  readonly theme = signal<ThemeConfig | null>(null);

  load(): void {

    this.http
      .get<SiteConfig>('data/site.json')
      .subscribe(data => this.site.set(data));

    this.http
      .get<NavigationItem[]>('data/navigation.json')
      .subscribe(data => this.navigation.set(data));

    this.http
      .get<ThemeConfig>('data/theme.json')
      .subscribe(data => this.theme.set(data));
  }
}