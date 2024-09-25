import { Routes } from '@angular/router';
import { AuthFormComponent } from './modules/auth/components/auth-form/auth-form.component';
import { HomeLayoutComponent } from './modules/layout/components/home-layout/home-layout.component';

export const routes: Routes = [
  { path: 'sign-in', component: AuthFormComponent },
  { path: 'home', component: HomeLayoutComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
];
