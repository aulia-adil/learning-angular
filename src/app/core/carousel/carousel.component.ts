import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {animate, style, transition, trigger} from "@angular/animations";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, BrowserModule, BrowserAnimationsModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        animate('300ms ease-in', style({ opacity: '0' }))
      ]),
      transition(':decrement', [
        animate('300ms ease-in', style({ transform: 'translateX(-200%)' }))
      ])
    ])
  ]
})
export class CarouselComponent {
  currentIndex = 0;
  carouselItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; // Replace with your carousel items

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    console.log("this.currentIndex", this.currentIndex);
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }
}
