import {Component, OnInit} from '@angular/core';
import {AirportService} from '../airport/airport.service';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {

  constructor(private airportService: AirportService) {
  }

  AirportList: any = [];

  ngOnInit(): void {
    this.loadAirports();
  }

  private loadAirports(): void {
    this.airportService.getAllAirports().subscribe((data: {}) => {
      this.AirportList = data;
    });
  }

  delete(airportId: string): void {
    this.airportService.delete(airportId).subscribe((data) => {
        this.loadAirports();
    });
  }
}
