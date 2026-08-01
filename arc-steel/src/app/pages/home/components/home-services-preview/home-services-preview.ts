import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

@Component({
  selector: 'app-home-services-preview',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home-services-preview.html',
  styleUrl: './home-services-preview.scss'
})
export class HomeServicesPreview {

  selectedService = 0;

  services: Service[] = [

    {
      title: 'Structural Steel Detailing',
      image: 'assets/images/services/service1.jpg',
      description: 'Accurate shop drawings, GA drawings and fabrication detailing for commercial and industrial steel structures.',
      features: [
        'Shop Drawings',
        'GA Drawings',
        'Erection Drawings'
      ]
    },

    {
      title: 'Tekla BIM Modeling',
      image: 'assets/images/services/service2.jpg',
      description: 'Detailed BIM models using Tekla Structures for coordination and fabrication.',
      features: [
        'LOD 400 Models',
        'Clash Detection',
        'BIM Coordination'
      ]
    },

    {
      title: 'Connection Design',
      image: 'assets/images/services/service3.jpg',
      description: 'Economical and code-compliant connection design prepared by experienced engineers.',
      features: [
        'Connection Calculations',
        'Design Reports',
        'Fabrication Support'
      ]
    },

    {
      title: 'Fabrication Drawings',
      image: 'assets/images/services/service4.jpg',
      description: 'High-quality fabrication drawings prepared for seamless manufacturing.',
      features: [
        'Assembly Drawings',
        'Single Part Drawings',
        'NC Files'
      ]
    },

    {
      title: 'Project Coordination',
      image: 'assets/images/services/service5.jpg',
      description: 'End-to-end coordination with architects, engineers and contractors.',
      features: [
        'RFI Management',
        'Model Review',
        'Project Support'
      ]
    }

  ];

}