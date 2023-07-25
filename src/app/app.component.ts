import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('move', [
      state('forward', style({
        transform: 'translateX({{forward_value}})'
      }), {params: {forward_value: '100%'}}),
      state('backward', style({
        transform: 'translateX(0)'
      })),
      transition('* => forward', [
        animate('1s'),
      ]),
    ]),
  ],
})
export class AppComponent {
  forwardValue = "10%"
  isOpen = false;
  counter = 0;

  toggleState() {
    this.isOpen = !this.isOpen;
  }

  increment() {
    this.counter++;
  }
}
