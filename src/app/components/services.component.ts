import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ServicesService } from '../services/services.service';
import { ServiceCardComponent } from './service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, ServiceCardComponent],
  template: `
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="section-title text-center">Nuestros Servicios</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <app-service-card
            *ngFor="let service of services"
            [service]="service"
          />
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  private servicesService = inject(ServicesService);
  services = this.servicesService.getServices();
}