import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './page/main.component';
import {ApiMyquranService} from "../core/api/api-myquran.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [ApiMyquranService],
})
export class MainModule { }
