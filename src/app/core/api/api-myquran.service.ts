import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiMyquranService {
  private _path: string | null = "https://api.myquran.com/v1/sholat/jadwal/";
  // "https://api.myquran.com/v1/sholat/jadwal/{city_id}/{year}/{month}/{date}";

  constructor() { }

  getData(city_id: number, year: number, month: number, date: number) {
    return `${this._path}${city_id}/${year}/${month}/${date}`
  }
}
