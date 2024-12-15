import { Component } from '@angular/core';
import { CompanyInfoComponent } from './components/company-info.component';
import { TeamComponent } from './components/team.components';
import { ValuesComponent } from './components/values.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CompanyInfoComponent, TeamComponent, ValuesComponent],
  template: `
    <div class="pt-24">
      <app-company-info />
      <app-team />
      <app-values />
    </div>
  `
})
export class NosotrosComponent {}