import { Component } from '@angular/core';
import {ApiMyquranService} from "../../core/api/api-myquran.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  location: string = "";
  sholatSchedules: string[][] = [];
  date: string = "";
  constructor(private _apiMyquranService: ApiMyquranService,
              private http: HttpClient) {
  }

  /**
   * Hit google search with "jadwal sholat"
   */
  getJadwalSholatGoogle() {
    this.http.get("https://www.google.com/search?q=jadwal+sholat")
      .subscribe((data: any) => {
        console.log("data", data);
      });
    return "";
  }

  ngOnInit() {
    // Get current year, month, and date
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    // Get data from API
    const url = this._apiMyquranService.getData(1221, year, month, date);
    console.log("url", url);
    this.http.get(
      "https://noembed.com/embed?callback=%3Cesi%3Ainclude%20src%3D%22%2Fesi%2Fjsonp-callback%22%2F%3E&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbDOYN-6gdRE",
      {responseType: "text"}
    )
      .subscribe((data: any) => {
        console.log("data", data);
      });
    this.http.get(this._apiMyquranService.getData(1221, year, month, date))
      .subscribe((data: any) => {
        this.location = data.data.lokasi;
        this.date = data.data.jadwal.tanggal;
        this.sholatSchedules = [
          ["subuh", data.data.jadwal.subuh],
          ["terbit", data.data.jadwal.terbit],
          ["dzuhur", data.data.jadwal.dzuhur],
          ["ashar", data.data.jadwal.ashar],
          ["maghrib", data.data.jadwal.maghrib],
          ["isya", data.data.jadwal.isya],
        ]
      });
  }
}

// {
//   "id": "1221",
//   "lokasi": "KOTA BEKASI",
//   "daerah": "JAWA BARAT",
//   "koordinat": {
//   "lat": -6.240727777777778,
//     "lon": 106.99964444444444,
//     "lintang": "6° 14' 26.62\" S",
//     "bujur": "106° 59' 58.72\" E"
// },
//   "jadwal": {
//   "tanggal": "Senin, 24/07/2023",
//     "imsak": "04:35",
//     "subuh": "04:45",
//     "terbit": "06:01",
//     "dhuha": "06:29",
//     "dzuhur": "12:02",
//     "ashar": "15:23",
//     "maghrib": "17:56",
//     "isya": "19:09",
//     "date": "2023-07-24"
// }
// }
