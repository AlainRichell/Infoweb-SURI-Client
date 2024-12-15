import { Component } from '@angular/core';

@Component({
  selector: 'app-company-info',
  standalone: true,
  template: `
    <section class="container mx-auto px-4 py-16">
      <h1 class="section-title">Sobre Nosotros</h1>
      <div class="card">
        <h2 class="text-2xl font-bold text-primary mb-4">Nuestra Historia</h2>
        <p class="mb-6">
          Con más de una década de experiencia en el sector, nos hemos especializado en 
          brindar soluciones integrales para equipos de oficina. Nuestro compromiso con 
          la excelencia y la satisfacción del cliente nos ha permitido crecer y 
          convertirnos en un referente en el mercado.
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-3">Experiencia</h3>
            <p>
              Más de 10 años brindando servicios de calidad a empresas estatales en 
              todo el país.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3">Compromiso</h3>
            <p>
              Garantizamos la satisfacción total en cada uno de nuestros servicios.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CompanyInfoComponent {}