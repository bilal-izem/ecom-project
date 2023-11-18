import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from "./carousel/carousel.component";
import {IvyCarouselModule} from 'angular-responsive-carousel';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CarouselComponent]
})

export class AppComponent {
  title = 'ecom';
}
