import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.sass']
})
export class NavbarItemComponent {
    menu: String[] = ["Testimonials", "About", "Contact"];
}
