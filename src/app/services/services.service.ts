import { Injectable } from '@angular/core';
import { Service } from '../interfaces/service.interface';
import { DetailedService } from '../interfaces/detailed-service.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  getServices(): Service[] {
    return [
      {
        icon: '🖨️',
        title: 'Remanufactura de tóner',
        description: 'Reducimos costos manteniendo la más alta calidad en impresión'
      },
      {
        icon: '🔧',
        title: 'Reparación de equipos',
        description: 'Servicio técnico especializado para todo tipo de equipos de oficina'
      },
      {
        icon: '⚡',
        title: 'Mantenimiento preventivo',
        description: 'Evita problemas futuros con nuestro servicio de mantenimiento'
      }
    ];
  }

  getDetailedServices(): DetailedService[] {
    return [
      {
        icon: '🖨️',
        title: 'Remanufactura de tóner',
        description: 'Reducimos costos con tóner de calidad garantizada, manteniendo los más altos estándares de impresión.',
        benefits: [
          'Ahorro significativo en costos',
          'Calidad de impresión garantizada',
          'Proceso eco-amigable',
          'Garantía en cada recarga'
        ]
      },
      {
        icon: '🔧',
        title: 'Reparación de equipos',
        description: 'Solucionamos desde problemas comunes hasta fallos complejos en todo tipo de equipos de oficina.',
        benefits: [
          'Diagnóstico preciso',
          'Técnicos certificados',
          'Repuestos originales',
          'Garantía de servicio'
        ]
      },
      {
        icon: '📄',
        title: 'Servicio de impresión',
        description: 'Ofrecemos servicios de impresión y fotocopiado de alta calidad para todas sus necesidades.',
        benefits: [
          'Alta resolución',
          'Entrega rápida',
          'Diversos formatos',
          'Precios competitivos'
        ]
      },
      {
        icon: '⚡',
        title: 'Mantenimiento preventivo',
        description: 'Programa regular de mantenimiento para prevenir fallos y extender la vida útil de sus equipos.',
        benefits: [
          'Prevención de fallos',
          'Mayor vida útil',
          'Menor costo a largo plazo',
          'Programación flexible'
        ]
      }
    ];
  }
}