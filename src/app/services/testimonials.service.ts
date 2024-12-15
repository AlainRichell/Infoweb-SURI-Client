import { Injectable } from '@angular/core';
import { Testimonial } from '../interfaces/testimonial.interface';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  getTestimonials(): Testimonial[] {
    return [
      {
        clientName: 'Empresa Estatal A',
        company: 'Sector Energético',
        content: 'Excelente servicio y profesionalismo en todo momento.'
      },
      {
        clientName: 'Empresa Estatal B',
        company: 'Sector Salud',
        content: 'Gran calidad en el servicio de mantenimiento preventivo.'
      },
      {
        clientName: 'Empresa Estatal C',
        company: 'Sector Educativo',
        content: 'Soluciones rápidas y efectivas para nuestros equipos.'
      }
    ];
  }
}