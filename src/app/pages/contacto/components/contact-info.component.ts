import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  template: `
    <section class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="card">
          <h2 class="text-2xl font-bold text-primary mb-4">Información de Contacto</h2>
          <div class="space-y-4">
            <p class="flex items-center">
              <span class="text-xl mr-2">📍</span>
              Av. Principal #123, Ciudad
            </p>
            <p class="flex items-center">
              <span class="text-xl mr-2">📞</span>
              <a href="tel:+123456789" class="hover:text-primary">+1 234 567 89</a>
            </p>
            <p class="flex items-center">
              <span class="text-xl mr-2">📧</span>
              <a href="mailto:info@techrepair.com" class="hover:text-primary">
                info&#64;techrepair.com
              </a>
            </p>
          </div>
          <div class="mt-6 space-x-4">
            <a href="https://wa.me/123456789" 
               class="btn-primary inline-flex items-center" 
               target="_blank">
              <span class="mr-2">💬</span>
              WhatsApp
            </a>
            <a href="tel:+123456789" 
               class="btn-primary inline-flex items-center">
              <span class="mr-2">📞</span>
              Llamar ahora
            </a>
          </div>
        </div>
        <div class="card">
          <h2 class="text-2xl font-bold text-primary mb-4">Horario de Atención</h2>
          <div class="space-y-2">
            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p>Sábados: 9:00 AM - 1:00 PM</p>
            <p>Domingos: Cerrado</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactInfoComponent {}