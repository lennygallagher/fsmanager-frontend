import { Component, OnInit } from '@angular/core';
import {AirportService} from "./airport.service";

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {

  constructor(private airportService: AirportService) { }

  AirportList: any = []

  ngOnInit(): void {
    this.loadAirports()
  }

  private loadAirports() {
    return this.airportService.getAllAirports().subscribe((data: {})=>{
      this.AirportList = data;
    })
  }
}
