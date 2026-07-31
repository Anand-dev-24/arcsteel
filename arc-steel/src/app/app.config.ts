import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { ConfigService } from './core/services/config';


export function initializeApp(
  configService: ConfigService
) {
  return () => {
    configService.load();
  };

}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};