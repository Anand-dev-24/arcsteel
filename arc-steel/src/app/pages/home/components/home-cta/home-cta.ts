import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../../shared/services/content.service';
import { Contact, ContactInfo } from '../../../../core/models/contact.model';
import { Service } from '../../../../core/models/service.model';


@Component({
  selector: 'app-home-cta',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-cta.html',
  styleUrl: './home-cta.scss',
})
export class HomeCta implements OnInit {

  private content = inject(ContentService);

  data!: Contact;

  contactInfo!: ContactInfo;

  model = {
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    message: ''
  };

  service!: Service;

  servicesList: any = [];

  ngOnInit(): void {
    this.data = this.content.getContact();
    this.service = this.content.getService();
    this.servicesList = this.service?.services?.map(e => e.shortTitle);
  }

  submit(): void {

    console.log(this.model);

    alert('Demo Submitted Successfully');

  }

}