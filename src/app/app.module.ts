import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { FlightComponent } from './components/flight/flight.component';
import { CruisesComponent } from './components/cruises/cruises.component';
import { CarsComponent } from './components/cars/cars.component';
import { PackagesComponent } from './components/packages/packages.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    NavbarComponent,
    SuggestionsComponent,
    FlightComponent,
    CruisesComponent,
    CarsComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
