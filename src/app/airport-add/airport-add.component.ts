import { Component, OnInit } from '@angular/core';
import {AirportService} from '../airport/airport.service';
import {Airport} from '../shared/airport';
import {Router} from '@angular/router';

@Component({
  selector: 'app-airport-add',
  templateUrl: './airport-add.component.html',
  styleUrls: ['./airport-add.component.css']
})
export class AirportAddComponent implements OnInit {

  public airport: Airport = new Airport();

  constructor(private airportService: AirportService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.airportService.saveAirport(this.airport)
      .subscribe(airport => this.router.navigate(['airport']), error => alert(error));
  }

  back(): void {
    this.router.navigate(['airport']);
  }
}
