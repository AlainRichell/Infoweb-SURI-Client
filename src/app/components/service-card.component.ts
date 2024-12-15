import { Component, Input } from '@angular/core';
import { Service } from '../interfaces/service.interface';

@Component({
  selector: 'app-service-card',
  standalone: true,
  template: `
    <div class="card">
      <div class="text-4xl text-primary mb-4">{{ service.icon }}</div>
      <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
      <p>{{ service.description }}</p>
    </div>
  `
})
export class ServiceCardComponent {
  @Input() service!: Service;
}