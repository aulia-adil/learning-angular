import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiMyquranService {
  private _path: string | null = "https://api.myquran.com/v1/sholat/jadwal/";
  // "https://api.myquran.com/v1/sholat/jadwal/{city_id}/{year}/{month}/{date}";

  constructor() { }

  getData(city_id: number, year: number, month: number, date: number) {
    return fetch(`${this._path}${city_id}/${year}/${month}/${date}`)
      .then(res => res.json())
      .then(res => res.data);
  }
}
