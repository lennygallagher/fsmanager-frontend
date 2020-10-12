import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AirportService} from '../airport/airport.service';
import {Airport} from '../shared/airport';

@Component({
  selector: 'app-airport-edit',
  templateUrl: './airport-edit.component.html',
  styleUrls: ['./airport-edit.component.css']
})
export class AirportEditComponent implements OnInit {
  private sub: Subscription;
  public airport: Airport;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private airportService: AirportService) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      const airportId = params.get('airportId');
      this.airportService.getAirportById(airportId).subscribe((airport) => {
        this.airport = airport;
      });
    });
  }

  back(): void {
    this.router.navigate(['airport']);
  }


  onSubmit(): void {
    this.airportService.updateAirport(this.airport)
      .subscribe(airport => this.router.navigate(['airport']), error => alert(error));
  }
}
