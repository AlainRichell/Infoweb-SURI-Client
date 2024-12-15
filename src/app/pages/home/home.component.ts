import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero.component';
import { ServicesComponent } from '../../components/services.component';
import { ContactComponent } from '../../components/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, ContactComponent],
  template: `
    <app-hero />
    <app-services />
    <app-contact />
  `
})
export class HomeComponent {}