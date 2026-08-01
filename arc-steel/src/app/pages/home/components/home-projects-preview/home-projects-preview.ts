import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {

  title: string;
  image: string;
  description: string;
  location: string;
  tonnage: string;
  software: string;

}

@Component({
  selector: 'app-home-projects-preview',
  imports: [CommonModule],
  templateUrl: './home-projects-preview.html',
  styleUrl: './home-projects-preview.scss',
})
export class HomeProjectsPreview {


  selectedProject = 0;

  projects: Project[] = [

    {
      title: 'Commercial Complex',
      image: 'assets/images/projects/project1.jpg',
      description: 'Multi-storey commercial building with structural steel detailing and erection drawings.',
      location: 'USA',
      tonnage: '1,250 MT',
      software: 'Tekla Structures'
    },

    {
      title: 'Industrial Plant',
      image: 'assets/images/projects/project2.jpg',
      description: 'Steel detailing for heavy industrial processing plant.',
      location: 'Canada',
      tonnage: '2,800 MT',
      software: 'Tekla Structures'
    },

    {
      title: 'High-Rise Building',
      image: 'assets/images/projects/project3.jpg',
      description: '40-storey office tower steel detailing and BIM coordination.',
      location: 'Australia',
      tonnage: '3,450 MT',
      software: 'Tekla Structures'
    },

    {
      title: 'Sports Stadium',
      image: 'assets/images/projects/project4.jpg',
      description: 'Long-span roof steel detailing for modern stadium.',
      location: 'UK',
      tonnage: '4,200 MT',
      software: 'Tekla Structures'
    },

    {
      title: 'Warehouse Project',
      image: 'assets/images/projects/project5.jpg',
      description: 'Large warehouse detailing with fabrication drawings.',
      location: 'UAE',
      tonnage: '980 MT',
      software: 'Tekla Structures'
    }

  ];

}
