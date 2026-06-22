import {
  ApplicationConfig
} from '@angular/core';

import {
  provideRouter
} from '@angular/router';

import {
  provideHttpClient
} from '@angular/common/http';

import {
  provideCalendar,
  DateAdapter
} from 'angular-calendar';

import {
  adapterFactory
} from 'angular-calendar/date-adapters/date-fns';

import {
  routes
} from './app.routes';


export const appConfig:
ApplicationConfig = {

  providers: [

    provideRouter(routes),

    provideHttpClient(),

    provideCalendar({

      provide: DateAdapter,

      useFactory: adapterFactory

    })

  ]

};