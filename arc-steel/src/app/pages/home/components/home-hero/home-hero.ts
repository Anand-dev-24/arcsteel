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

  currentSlide = 0;

  intervalId: any;

  heroSlides = [

    {
      image: 'images/hero/hero_1.jpg',
      title: 'Structural Steel Detailing',
      subtitle: 'Accurate. Reliable. Delivered On Time.'
    },

    {
      image: 'images/hero/hero_2.jpg',
      title: 'Tekla BIM Modeling',
      subtitle: 'High Precision 3D Models'
    },

    {
      image: 'images/hero/hero_3.jpg',
      title: 'Connection Design',
      subtitle: 'Safe and Cost Effective Solutions'
    },

    {
      image: 'images/hero/hero_4.jpg',
      title: 'Fabrication Drawings',
      subtitle: 'Shop Drawings Ready For Production'
    },

    {
      image: 'images/hero/hero_2.jpg',
      title: 'Global Engineering Services',
      subtitle: 'Supporting Projects Worldwide'
    }

  ];

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startSlider() {

    this.intervalId = setInterval(() => {

      this.nextSlide();

    }, 5000);

  }

  nextSlide() {

    this.currentSlide =
      (this.currentSlide + 1) % this.heroSlides.length;

  }

  previousSlide() {

    this.currentSlide =
      (this.currentSlide - 1 + this.heroSlides.length)
      % this.heroSlides.length;

  }

}