import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AirportComponent} from './airport/airport.component';
import {AirportEditComponent} from './airport-edit/airport-edit.component';
import {AirportAddComponent} from './airport-add/airport-add.component';

const routes: Routes = [
  {path: 'airport', component: AirportComponent},
  {path: 'airport-edit/:airportId', component: AirportEditComponent},
  {path: 'airport-add', component: AirportAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
