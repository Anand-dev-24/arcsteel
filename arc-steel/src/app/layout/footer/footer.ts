import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  readonly year = new Date().getFullYear();

  readonly quickLinks = [
    'Home',
    'About',
    'Services',
    'Projects',
    'Contact'
  ];

  readonly services = [
    'Steel Detailing',
    'Connection Detailing',
    'BIM Modelling',
    'Shop Drawings',
    'Erection Drawings'
  ];

}