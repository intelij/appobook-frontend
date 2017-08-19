import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import { CalendarComponent } from "ap-angular2-fullcalendar";

import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';

import { CalendarModule } from "ap-angular2-fullcalendar";

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
