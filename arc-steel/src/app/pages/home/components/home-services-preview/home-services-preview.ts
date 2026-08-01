import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-services-preview',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './home-services-preview.html',
  styleUrl: './home-services-preview.scss'
})
export class HomeServicesPreview {

  active = signal(0);

  services = [
    {
      title: 'Web Development',
      subtitle: 'Enterprise Web Solutions',
      description: 'We build responsive websites, portals and enterprise web applications.',
      image: 'images/services/web-development.jpg',
      technologies: ['Angular','Java','.NET','Spring Boot']
    },
    {
      title: 'Mobile Apps',
      subtitle: 'Android & iOS',
      description: 'Modern mobile applications with excellent user experience.',
      image: 'images/services/mobile.jpg',
      technologies: ['Flutter','Android','iOS','Firebase']
    },
    {
      title: 'Cloud & DevOps',
      subtitle: 'Cloud Infrastructure',
      description: 'Cloud migration, automation and scalable deployments.',
      image: 'images/services/cloud.jpg',
      technologies: ['AWS','Azure','Docker','Kubernetes']
    }
  ];

  select(index:number){
    this.active.set(index);
  }

}