import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RupiahTransformerPipe} from "./shared/rupiah-transformer/rupiah-transformer.pipe";

@NgModule({
  declarations: [
    AppComponent,
    RupiahTransformerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
