import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {

  id: number;

  shortTitle: string;

  title: string;

  image: string;

  location: string;

  description: string;

  client: string;

  area: string;

  highlights: string[];

}

@Component({
  selector: 'app-home-projects-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-projects-preview.html',
  styleUrl: './home-projects-preview.scss'
})
export class HomeProjectsPreview {

  selectedProject = 0;

  readonly projects: Project[] = [

    {
      id: 0,
      shortTitle: 'Industrial',
      title: 'Industrial Manufacturing Facility',
      image: 'images/projects/project_1.jpg',
      location: 'Texas, USA',
      client: 'Global Steel Fabricator',
      area: '85,000 sq.ft',
      description:
        'Complete structural steel detailing including fabrication drawings, GA drawings and erection drawings for a large industrial manufacturing facility.',
      highlights: [
        'Tekla Structures',
        'Shop Drawings',
        'Erection Drawings',
        'Connection Detailing'
      ]
    },

    {
      id: 1,
      shortTitle: 'Commercial',
      title: 'Commercial Office Building',
      image: 'images/projects/project_2.jpg',
      location: 'Dubai, UAE',
      client: 'Leading Contractor',
      area: '120,000 sq.ft',
      description:
        'Delivered accurate BIM models and steel detailing package for a multi-storey commercial office project.',
      highlights: [
        'BIM Coordination',
        'LOD 400',
        'Steel Detailing',
        'IFC Models'
      ]
    },

    {
      id: 2,
      shortTitle: 'Warehouse',
      title: 'Warehouse & Logistics Hub',
      image: 'images/projects/project_3.jpg',
      location: 'Germany',
      client: 'Logistics Company',
      area: '160,000 sq.ft',
      description:
        'Prepared fabrication-ready detailing package with fast turnaround for a high-capacity logistics warehouse.',
      highlights: [
        'GA Drawings',
        'Anchor Bolt Plans',
        'Assembly Drawings',
        'Material Reports'
      ]
    },

    {
      id: 3,
      shortTitle: 'Power Plant',
      title: 'Power Plant Expansion',
      image: 'images/projects/project_4.jpg',
      location: 'Australia',
      client: 'Energy Company',
      area: '210,000 sq.ft',
      description:
        'Executed structural steel detailing for complex power plant structures with strict quality standards.',
      highlights: [
        'Complex Connections',
        'Heavy Steel',
        'Clash Detection',
        '3D Modelling'
      ]
    },

    {
      id: 4,
      shortTitle: 'Infrastructure',
      title: 'Transportation Infrastructure',
      image: 'images/projects/project_5.jpg',
      location: 'Singapore',
      client: 'Infrastructure Contractor',
      area: '95,000 sq.ft',
      description:
        'Steel detailing support for transport infrastructure with coordinated BIM models and erection documentation.',
      highlights: [
        'Bridge Components',
        'Steel Frames',
        'BIM Models',
        'Site Coordination'
      ]
    }

  ];

  select(index: number): void {

    this.selectedProject = index;

  }

}