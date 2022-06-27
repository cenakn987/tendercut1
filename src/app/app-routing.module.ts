import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedInGuard } from './logged-in.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{"path":"login",component:LoginComponent},{"path":"dashboard",component:DashboardComponent,canActivate:[LoggedInGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
