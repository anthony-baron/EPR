import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
//import { GoogleMapComponent } from './components/google-map/google-map.component';
import { AnimalLocaterComponent } from './components/animal-locater/animal-locater.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    //GoogleMapComponent,
    AnimalLocaterComponent,
    UserCreateComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
