import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumbRoute: 'Home' }},
  { path: 'test', component: TestComponent, data: { breadcrumbRoute: 'Test' }},
  { path: 'test/test1', component: Test1Component, data: { breadcrumbRoute: 'Test1'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
