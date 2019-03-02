import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { AnimalLocaterComponent } from './components/animal-locater/animal-locater.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    AnimalLocaterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
