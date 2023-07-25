import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MainModule} from "./main/main.module";
import {SholatReminderComponent} from "./core/sholat-reminder/sholat-reminder.component";
import {CommonModule} from "@angular/common";
import {CarouselComponent} from "./core/carousel/carousel.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SholatReminderComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    CarouselComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
