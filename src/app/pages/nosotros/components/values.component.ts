import { Component } from '@angular/core';

@Component({
  selector: 'app-values',
  standalone: true,
  template: `
    <section class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card">
          <h2 class="text-2xl font-bold text-primary mb-4">Misión</h2>
          <p>
            Proveer soluciones de oficina con eficiencia y calidad, garantizando la 
            satisfacción total de nuestros clientes mediante un servicio profesional 
            y personalizado.
          </p>
        </div>
        <div class="card">
          <h2 class="text-2xl font-bold text-primary mb-4">Visión</h2>
          <p>
            Ser líderes en mantenimiento y reparación de equipos de oficina para 
            empresas estatales, reconocidos por nuestra excelencia y compromiso.
          </p>
        </div>
        <div class="card">
          <h2 class="text-2xl font-bold text-primary mb-4">Valores</h2>
          <ul class="space-y-2">
            <li>✓ Profesionalismo</li>
            <li>✓ Responsabilidad</li>
            <li>✓ Innovación</li>
            <li>✓ Compromiso</li>
            <li>✓ Excelencia</li>
          </ul>
        </div>
      </div>
    </section>
  `
})
export class ValuesComponent {}