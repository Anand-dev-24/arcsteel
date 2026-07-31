import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NavigationItem } from '../models/navigation-item';
import { SiteConfig } from '../models/site-config';
import { ThemeConfig } from '../models/theme-config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private http = inject(HttpClient);

  readonly navigation = signal<NavigationItem[]>([]);
  readonly site = signal<SiteConfig | null>(null);
  readonly theme = signal<ThemeConfig | null>(null);

  load(): void {

    this.http
      .get<NavigationItem[]>('data/navigation.json')
      .subscribe(data => this.navigation.set(data));

    this.http
      .get<SiteConfig>('data/site.json')
      .subscribe(data => this.site.set(data));

    this.http
      .get<ThemeConfig>('data/theme.json')
      .subscribe(data => this.theme.set(data));

  }

}