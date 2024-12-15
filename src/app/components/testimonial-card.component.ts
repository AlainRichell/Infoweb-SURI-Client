import { Component, Input } from '@angular/core';
import { Testimonial } from '../interfaces/testimonial.interface';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  template: `
    <div class="card">
      <h2 class="text-xl font-bold text-primary mb-2">{{ testimonial.clientName }}</h2>
      <p class="text-sm text-gray-600 mb-2">{{ testimonial.company }}</p>
      <p class="italic">"{{ testimonial.content }}"</p>
    </div>
  `
})
export class TestimonialCardComponent {
  @Input() testimonial!: Testimonial;
}