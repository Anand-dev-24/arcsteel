import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-cta',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home-cta.html',
  styleUrl: './home-cta.scss',
})
export class HomeCta {

  private fb = inject(FormBuilder);

  contactForm = this.fb.group({

    fullName: ['', Validators.required],

    company: ['', Validators.required],

    email: ['', [Validators.required, Validators.email]],

    phone: [''],

    country: [''],

    service: ['', Validators.required],

    message: ['', Validators.required]

  });

  onSubmit() {

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }

    console.log(this.contactForm.value);

    // API Call here

  }

}
