import { Component, Input} from '@angular/core';
import { DetailedService } from '../../../interfaces/detailed-service.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="card">
      <div class="flex items-start gap-6">
        <div class="text-4xl text-primary">{{ service.icon }}</div>
        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">{{ service.title }}</h2>
          <p class="mb-4">{{ service.description }}</p>
          <h3 class="font-semibold mb-2">Beneficios:</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li *ngFor="let benefit of service.benefits">{{ benefit }}</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class ServiceDetailComponent {
  @Input() service!: DetailedService;
}