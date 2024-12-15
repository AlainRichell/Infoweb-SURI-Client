import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { TestimonialsService } from '../../services/testimonials.service';
import { TestimonialCardComponent } from '../../components/testimonial-card.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [NgFor, TestimonialCardComponent],
  template: `
    <div class="pt-24">
      <section class="container mx-auto px-4 py-16">
        <h1 class="section-title">Nuestros Clientes</h1>
        <div class="grid md:grid-cols-3 gap-8">
          <app-testimonial-card
            *ngFor="let testimonial of testimonials"
            [testimonial]="testimonial"
          />
        </div>
      </section>
    </div>
  `
})
export class ClientesComponent {
  private testimonialsService = inject(TestimonialsService);
  testimonials = this.testimonialsService.getTestimonials();
}