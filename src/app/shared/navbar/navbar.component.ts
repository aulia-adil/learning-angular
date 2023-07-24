import {Component} from '@angular/core';
import {NavbarItemsService} from "../services/navbar-items.service";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  navbarItems: string[] = [];
  logo: string = 'assets/DSC_9824_copy.jpg';

  constructor(private _navbarItemsService: NavbarItemsService,
              private responsive: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.navbarItems = this._navbarItemsService.getNavbarItems();
  }
}
