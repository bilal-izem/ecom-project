
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})


export class CarouselComponent {

  carouselItems = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1445620466293-d6316372ab59?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJzfHx8fHx8MTcwMDI3MTIzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900',
      iconClass: 'fa-solid fa-desktop',
      title: 'Welcome to our computers magazine',
      description: 'Explore our outstanding range of cutting-edge computers. Exceptional performance, sleek design, an unparalleled computing experience.',
      buttonText: 'buy Now',
      color : 'cyan',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1598327105740-820e04db502e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bW9iaWxlc3x8fHx8fDE3MDAyNzEzMjc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900',
      iconClass: 'fa-solid fa-mobile',
      title: 'Welcome to our mobile magazine',
      description: 'Explore our outstanding range of cutting-edge phones. Exceptional performance, sleek design, an unparalleled computing experience.',
      buttonText: 'buy Now',
      color : 'orange'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1614179818511-4bb0af32e44a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhZHBob25lc3x8fHx8fDE3MDAyNzE0ODE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900',
      iconClass: 'fa-solid fa-headphones',
      title: 'Welcome to our headphones magazine',
      description: 'Explore our outstanding range of cutting-edge headphones. Exceptional performance, sleek design, an unparalleled computing experience.',
      buttonText: 'buy Now',
      color : 'yellow'
    }

  ];

}

