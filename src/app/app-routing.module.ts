import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  {  path: '',  component: LoginComponent },
  {  path: 'dashboard', component: DashboardComponent,
     children: [
      { path: 'header', component: HeaderComponent}
     ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
