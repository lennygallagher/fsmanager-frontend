import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Airport} from '../shared/airport';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  apiUrl = 'http://localhost:8080/airports';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllAirports(): Observable<Airport> {
    return this.http.get<Airport>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getAirportById(airportId: string): Observable<Airport> {
    const url = `${this.apiUrl}/${airportId}`;
    return this.http.get<Airport>(url);
  }

  saveAirport(airport: Airport): Observable<Airport> {
    return this.http.post<Airport>(this.apiUrl, airport);
  }

  updateAirport(airport: Airport): Observable<Airport> {
    return this.http.put<Airport>(this.apiUrl, airport);
  }

  delete(airportId: string): Observable<void>{
    const url = `${this.apiUrl}/${airportId}`;
    return this.http.delete<void>(url);
  }


  // Error handling
  handleError(error): Observable<never> {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
