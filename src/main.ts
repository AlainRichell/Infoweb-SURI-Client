import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './app/components/header.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <router-outlet />
    <footer class="bg-primary text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2024 TechRepair. Todos los derechos reservados.</p>
      </div>
    </footer>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ],
}).catch(err => console.error(err));