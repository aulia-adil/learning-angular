import {Component, ViewChild} from '@angular/core';
import {NavbarItemsService} from "../services/navbar-items.service";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.sass']
})
export class NavbarMobileComponent {
  hideMobileNavbar: boolean = true;
  navbarItems: string[] = [];
  showFiller: boolean = false;

  constructor(private _navbarItemsService: NavbarItemsService,
              private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.navbarItems = this._navbarItemsService.getNavbarItems();
    this.responsive.observe(
      [Breakpoints.XSmall]).subscribe((state: any) => {
        this.hideMobileNavbar = true;
        if (state.matches) {

          this.hideMobileNavbar = false;

        }
      }
    );
  }
}
