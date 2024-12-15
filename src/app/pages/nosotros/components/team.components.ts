import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  template: `
    <section class="container mx-auto px-4 py-16">
      <h2 class="section-title">Nuestro Equipo</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card text-center">
          <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
            <span class="text-4xl">👨‍🔧</span>
          </div>
          <h3 class="text-xl font-bold mb-2">Juan Pérez</h3>
          <p class="text-gray-600">Técnico Senior</p>
        </div>
        <div class="card text-center">
          <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
            <span class="text-4xl">👨‍💼</span>
          </div>
          <h3 class="text-xl font-bold mb-2">María García</h3>
          <p class="text-gray-600">Gerente de Servicios</p>
        </div>
        <div class="card text-center">
          <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
            <span class="text-4xl">👨‍🔧</span>
          </div>
          <h3 class="text-xl font-bold mb-2">Carlos Rodríguez</h3>
          <p class="text-gray-600">Técnico Especialista</p>
        </div>
      </div>
    </section>
  `
})
export class TeamComponent {}