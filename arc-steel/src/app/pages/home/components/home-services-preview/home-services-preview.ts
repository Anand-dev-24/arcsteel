import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {

  id: number;

  title: string;

  shortTitle: string;

  image: string;

  description: string;

  points: string[];

}

@Component({
  selector: 'app-home-services-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-services-preview.html',
  styleUrl: './home-services-preview.scss'
})
export class HomeServicesPreview {

  selectedService = 0;

  readonly services: Service[] = [

    {

      id: 0,

      shortTitle: 'Steel Detailing',

      title: 'Structural Steel Detailing',

      image: 'images/services/service_1.jpg',

      description:
      'We provide highly accurate structural steel detailing services using Tekla Structures and industry standards to produce fabrication-ready drawings.',

      points: [

        'Fabrication Drawings',

        'Anchor Bolt Plans',

        'General Arrangement Drawings',

        'Assembly Drawings'

      ]

    },

    {

      id: 1,

      shortTitle: 'Connection',

      title: 'Steel Connection Detailing',

      image: 'images/services/service_2.jpg',

      description:
      'Detailed connection drawings ensuring safe fabrication and erection while reducing rework at site.',

      points: [

        'Moment Connections',

        'Shear Connections',

        'Base Plate Details',

        'Connection Calculations'

      ]

    },

    {

      id: 2,

      shortTitle: 'BIM',

      title: 'BIM & 3D Modelling',

      image: 'images/services/service_3.jpg',

      description:
      'Accurate BIM models for clash detection, coordination and improved construction workflow.',

      points: [

        'LOD 300-500',

        'Clash Detection',

        'Coordination Models',

        'IFC Deliverables'

      ]

    },

    {

      id: 3,

      shortTitle: 'Shop Drawings',

      title: 'Shop Drawings',

      image: 'images/services/service_4.jpg',

      description:
      'Detailed shop drawings prepared for steel fabricators with complete dimensions and welding information.',

      points: [

        'Assembly Drawings',

        'Single Part Drawings',

        'Bolt Lists',

        'Material Lists'

      ]

    },

    {

      id: 4,

      shortTitle: 'Erection',

      title: 'Erection Drawings',

      image: 'images/services/service_5.jpg',

      description:
      'Professional erection drawings for safe and efficient on-site installation of structural steel.',

      points: [

        'Sequence Drawings',

        'GA Plans',

        'Erection Marks',

        'Field Bolt Details'

      ]

    }

  ];

  select(index: number): void {

    this.selectedService = index;

  }

}