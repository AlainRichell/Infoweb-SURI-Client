import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="bg-gradient-to-r from-primary to-secondary text-white pt-24 pb-12">
      <div class="container mx-auto px-4 py-16">
        <div class="max-w-3xl">
          <h1 class="text-5xl font-bold mb-6">
            Soluciones integrales para tus equipos de oficina
          </h1>
          <p class="text-xl mb-8">
            Especialistas en reparación y mantenimiento para empresas estatales
          </p>
          <a routerLink="/servicios" class="btn-primary bg-white text-primary">
            Descubre nuestros servicios
          </a>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}