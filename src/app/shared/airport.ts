import {BaseEntity} from './baseEntity';

export class Airport extends BaseEntity{
  name: string;
  iata: string;
  icao: string;
}
