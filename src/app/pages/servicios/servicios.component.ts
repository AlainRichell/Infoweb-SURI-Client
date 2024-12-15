import { Component, inject } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { ServiceDetailComponent } from './components/service-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ServiceDetailComponent, CommonModule],
  template: `
    <div class="pt-24">
      <section class="container mx-auto px-4 py-16">
        <h1 class="section-title">Nuestros Servicios</h1>
        <div class="grid gap-8">
          <app-service-detail
            *ngFor="let service of services"
            [service]="service"
          />
        </div>
      </section>
    </div>
  `
})
export class ServiciosComponent {
  private servicesService = inject(ServicesService);
  services = this.servicesService.getDetailedServices();
}