import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SholatReminderComponent} from "./core/sholat-reminder/sholat-reminder.component";
import {MainComponent} from "./main/page/main.component";

const routes: Routes = [
  { path: '', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
