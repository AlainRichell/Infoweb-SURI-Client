import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];