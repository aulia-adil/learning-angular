import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarItemsService {

  constructor() { }

  getNavbarItems(): string[] {
    return ['Home', 'About', 'Contact'];
  }
}
