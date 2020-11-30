import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth/auth-layout/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { AyniLayoutComponent } from './ayni-layout/ayni-layout.component';
import { HomeComponent } from './pages/inicio/home/home.component';
import { PlanHistoryComponent } from './pages/inicio/plan-history/plan-history.component';
import { PlanProductionComponent } from './pages/inicio/plan-production/plan-production.component';



const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: '',
    component: AyniLayoutComponent,
    children: [
      { path: '', redirectTo: 'inicio/home', pathMatch: 'full' },
      { path: 'inicio/home', component: HomeComponent },
      { path: 'inicio/plan-production', component: PlanProductionComponent },
      { path: 'inicio/production/:hash', component: PlanHistoryComponent },
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
