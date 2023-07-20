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
  hideNavbar: boolean = false;

  constructor(private _navbarItemsService: NavbarItemsService,
              private responsive: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.navbarItems = this._navbarItemsService.getNavbarItems();
    this.responsive.observe(
      [Breakpoints.XSmall]).subscribe((state: any) => {
        this.hideNavbar = false;

        if (state.matches) {
          this.hideNavbar = true;
        }
      }
    );
  }
}
