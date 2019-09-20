import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard.routes';
import { AuthGuardService } from '../guards/auth-guard.service';
import { RoleGuardService } from '../guards/role-guard.service';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, AdminComponent, ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthGuardService,
    RoleGuardService
  ]
})
export class DashboardModule { }
