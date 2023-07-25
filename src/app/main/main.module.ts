import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SholatReminderComponent } from '../core/sholat-reminder/sholat-reminder.component';
import {ApiMyquranService} from "../core/api/api-myquran.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MainComponent } from './page/main.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [ApiMyquranService],
})
export class MainModule { }
