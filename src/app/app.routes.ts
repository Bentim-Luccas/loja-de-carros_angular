import { Routes } from '@angular/router';
import { LoginLbentimComponent } from './componentes/login-lbentim/login-lbentim.component';
import { HomeLbentimComponent } from './componentes/home-lbentim/home-lbentim.component';

export const routes: Routes = [
  { path: '', component: LoginLbentimComponent },
  { path: 'login', component: LoginLbentimComponent },
  { path: 'home', component: HomeLbentimComponent },
  { path: '**', redirectTo: '' }
];