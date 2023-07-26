import { Component } from '@angular/core';
import {ApiMyquranService} from "../api/api-myquran.service";
import {HttpClient} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-sholat-reminder',
  templateUrl: './sholat-reminder.component.html',
  styleUrls: ['./sholat-reminder.component.sass'],
  standalone: true,
  imports: [BrowserModule, MatCardModule, MatButtonModule],
})
export class SholatReminderComponent {
  location: string = "";
  sholatSchedules: string[][] = [];
  date: string = "";
  sholatSchedule: string[] = [];
  time: string = "";
  constructor(private _apiMyquranService: ApiMyquranService,
              private http: HttpClient) {
  }

  ngOnInit() {
    // Get current year, month, and date
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    // Get data from API
    const JAKARTA_CITY_ID = 1301;
    const url = this._apiMyquranService.getData(JAKARTA_CITY_ID, year, month, date);
    console.log("url", url);
    this.http.get(url)
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
        this.sholatSchedules.every((schedule: string[]) => {
          console.log("schedule", schedule);
          // If time now is between two schedule time, then console.log
          const scheduleTime = schedule[1];
          const scheduleHour = parseInt(scheduleTime.split(":")[0]);
          const scheduleMinute = parseInt(scheduleTime.split(":")[1]);
          const scheduleSecond = 0;
          const scheduleTimeDate = new Date(year, month-1, date, scheduleHour, scheduleMinute, scheduleSecond);
          if (now.getTime() < scheduleTimeDate.getTime()) {
            this.sholatSchedule = schedule;
            console.log("this.sholatSchedule", this.sholatSchedule);
            // break from loop
            return false;
          }
          return true;
        })
      });

    /**
     * Make a clock that increment every second
     */
    setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();
      this.time = `${hour}:${minute}:${second}`;

    }, 1000);

  }
}
