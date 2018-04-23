import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    NavbarComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
