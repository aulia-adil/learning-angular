import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { routes } from '../app-routing.module';
import { NavigationEnd, Router } from '@angular/router';

export interface RouteInfo {
  path: string;
  name: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent {
  @Input() breadcrumbRoutes: RouteInfo[] = [];

  
}
