import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {

  icon: string;

  title: string;

  description: string;

}

@Component({
  selector: 'app-home-about-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-about-preview.html',
  styleUrl: './home-about-preview.scss'
})
export class HomeAboutPreview {

  readonly features: Feature[] = [

    {
      icon: 'bi bi-building',
      title: 'Steel Detailing',
      description:
        'Accurate fabrication and erection drawings following international standards.'
    },

    {
      icon: 'bi bi-boxes',
      title: 'BIM Modelling',
      description:
        '3D structural steel models for clash-free project coordination.'
    },

    {
      icon: 'bi bi-award',
      title: 'Quality Delivery',
      description:
        'Committed to quality, precision and on-time project delivery.'
    }

  ];

}