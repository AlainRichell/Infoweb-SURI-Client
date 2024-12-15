import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-white shadow-md fixed w-full z-50">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <a routerLink="/" class="text-2xl font-bold text-primary flex items-center">
          <span class="text-3xl mr-2">🛠️</span>
          TechRepair
        </a>
        <div class="space-x-6">
          <a routerLink="/" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: true}" 
             class="hover:text-primary transition-colors">Inicio</a>
          <a routerLink="/servicios" routerLinkActive="text-primary" 
             class="hover:text-primary transition-colors">Servicios</a>
          <a routerLink="/nosotros" routerLinkActive="text-primary" 
             class="hover:text-primary transition-colors">Nosotros</a>
          <a routerLink="/clientes" routerLinkActive="text-primary" 
             class="hover:text-primary transition-colors">Clientes</a>
          <a routerLink="/contacto" routerLinkActive="text-primary" 
             class="hover:text-primary transition-colors">Contacto</a>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {}