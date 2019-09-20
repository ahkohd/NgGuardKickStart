import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoggedInAuthService } from './guards/logged-in-auth.service';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInAuthService] },
  { path: '**', redirectTo: '404' },
  { path: '404', component: PageNotFoundComponent}
];
