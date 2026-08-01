import {
  Component,
  OnInit,
  OnDestroy,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss'
})
export class HomeHero implements OnInit, OnDestroy {

  slides = [
    {
      title: 'Engineering Digital Excellence',
      description:
        'Delivering enterprise software, business websites and cloud solutions.',
      image: 'images/hero/hero1.jpg',
      route: '/services'
    },
    {
      title: 'Modern Web Applications',
      description:
        'Scalable, responsive and secure Angular applications.',
      image: 'images/hero/hero2.jpg',
      route: '/services'
    },
    {
      title: 'Cloud & DevOps',
      description:
        'Accelerate your business with cloud-native technologies.',
      image: 'images/hero/hero3.jpg',
      route: '/services'
    }
  ];

  currentSlide = signal(0);

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startSlider(): void {
    this.timer = setInterval(() => {
      this.next();
    }, 5000);
  }

  next(): void {
    this.currentSlide.update(v => (v + 1) % this.slides.length);
  }

  previous(): void {
    this.currentSlide.update(v =>
      v === 0 ? this.slides.length - 1 : v - 1
    );
  }

  goTo(index: number): void {
    this.currentSlide.set(index);
  }
}