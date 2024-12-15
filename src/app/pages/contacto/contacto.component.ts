import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact.component';
import { ContactInfoComponent } from './components/contact-info.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ContactComponent, ContactInfoComponent],
  template: `
    <div class="pt-24">
      <app-contact />
      <app-contact-info />
    </div>
  `
})
export class ContactoComponent {}