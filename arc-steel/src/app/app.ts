import { Component, inject } from '@angular/core';

import { Shell } from './layout/shell/shell';
import { ConfigService } from './core/services/config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Shell],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  private readonly configService = inject(ConfigService);

  constructor() {
    this.configService.load();
  }

}