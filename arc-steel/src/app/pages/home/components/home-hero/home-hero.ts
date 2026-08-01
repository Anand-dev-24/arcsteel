import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';

interface HeroSlide {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
}

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss'
})
export class HomeHero implements OnInit, OnDestroy {

  private readonly platformId = inject(PLATFORM_ID);

  private timer: number | null = null;

  currentIndex = 0;

  readonly slides: HeroSlide[] = [

    {
      image: 'images/hero/hero_1.jpg',
      subtitle: 'STRUCTURAL STEEL DETAILING',
      title: 'Precision Steel Detailing Solutions',
      description:
        'Accurate shop drawings, erection drawings and BIM models delivered on time for fabricators and contractors worldwide.',
      buttonText: 'Learn More'
    },

    {
      image: 'images/hero/hero_2.jpg',
      subtitle: 'BIM MODELLING',
      title: 'Intelligent 3D Steel Modelling',
      description:
        'High-quality BIM models that improve coordination, reduce clashes and accelerate project delivery.',
      buttonText: 'Our Services'
    },

    {
      image: 'images/hero/hero_3.jpg',
      subtitle: 'SHOP DRAWINGS',
      title: 'Fabrication Ready Drawings',
      description:
        'Detailed fabrication drawings prepared according to AISC, NISD and international standards.',
      buttonText: 'View Projects'
    },

    {
      image: 'images/hero/hero_4.jpg',
      subtitle: 'GLOBAL DELIVERY',
      title: 'Trusted Engineering Partner',
      description:
        'Supporting structural steel fabricators, consultants and contractors across the globe.',
      buttonText: 'About Us'
    },

    {
      image: 'images/hero/hero_5.jpg',
      subtitle: 'QUALITY FIRST',
      title: 'Engineering Excellence Delivered',
      description:
        'Committed to quality, accuracy and timely delivery for every structural steel project.',
      buttonText: 'Contact Us'
    }

  ];

  ngOnInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.timer = window.setInterval(() => {
      this.next();
    }, 5000);

  }

  ngOnDestroy(): void {

    if (this.timer !== null) {
      clearInterval(this.timer);
    }

  }

  next(): void {

    this.currentIndex =
      (this.currentIndex + 1) % this.slides.length;

  }

  previous(): void {

    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) %
      this.slides.length;

  }

  goTo(index: number): void {

    this.currentIndex = index;

  }

}