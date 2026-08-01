import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-cta',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-cta.html',
  styleUrl: './home-cta.scss',
})
export class HomeCta {

  model = {
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    message: ''
  };

  services = [
    'Steel Detailing',
    'Connection Detailing',
    'BIM Modelling',
    'Shop Drawings',
    'Erection Drawings'
  ];

  submit(): void {

    console.log(this.model);

    alert('Demo Submitted Successfully');

  }

}