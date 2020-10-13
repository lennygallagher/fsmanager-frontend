import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AirportComponent } from './airport/airport.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AirportEditComponent } from './airport-edit/airport-edit.component';
import { AirportListComponent } from './airport-list/airport-list.component';
import {FormsModule} from '@angular/forms';
import { AirportAddComponent } from './airport-add/airport-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AirportComponent,
    AirportEditComponent,
    AirportListComponent,
    AirportAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
