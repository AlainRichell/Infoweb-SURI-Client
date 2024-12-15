import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactForm } from '../interfaces/contact-form.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="section-title text-center">Contáctanos</h2>
        <div class="max-w-2xl mx-auto">
          <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                [(ngModel)]="formData.name"
                required
                class="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label for="company" class="block text-sm font-medium mb-2">Empresa</label>
              <input
                type="text"
                id="company"
                name="company"
                [(ngModel)]="formData.company"
                required
                class="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="formData.email"
                required
                email
                class="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                [(ngModel)]="formData.message"
                required
                rows="4"
                class="w-full p-2 border rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              [disabled]="!contactForm.valid"
              class="btn-primary w-full disabled:opacity-50"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    company: '',
    email: '',
    message: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
      // Here you would typically send the data to a backend service
      form.resetForm();
    }
  }
}