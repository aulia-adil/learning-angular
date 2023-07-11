import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouteInfo } from './breadcrumb/breadcrumb.component';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  currentPath: string | undefined;
  breadcrumbRoutes: RouteInfo[] = [];

  constructor(private location: Location, private router: Router) {
    let test = this.location.path();
    let test1: string[] = test.split('/');
    console.log(test1);

    test1.forEach((element) => {
      routes.forEach((route) => {
        if (route.path === element) {
          const routeInfo: RouteInfo = { path: route.path, name: route.data?.['breadcrumbRoute'] }

          this.breadcrumbRoutes.push(routeInfo);
        }
      })
    });
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentPath = val.url;
        this.breadcrumbRoutes = [];
        let test = this.location.path();
        let test1: string[] = test.split('/');
        console.log(test1);

        let test2: string = "";
        const threshold = 2;
        let counter = 0;
        test1.forEach((element) => {
          test2 += element;
          routes.forEach((route) => {
            console.log(route.path);
            if (route.path === test2) {
              const routeInfo: RouteInfo = { path: route.path, name: route.data?.['breadcrumbRoute'] }

              this.breadcrumbRoutes.push(routeInfo);
            }
          })
          counter++;
          if (counter >= threshold) {
            test2 += "/";
          }
        })
      }
    });
    console.log(this.breadcrumbRoutes);
  }
}
