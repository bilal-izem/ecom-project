import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()]
};
