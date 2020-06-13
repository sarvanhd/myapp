import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
    //canLoad: [AuthGuard]
  },
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{
  path: 'login',
  loadChildren: './login/login.module#LoginModule'
  //canLoad: [AuthGuard]
},
{
  path: 'register',
  loadChildren: './login/login.module#LoginModule'
  //canLoad: [AuthGuard]
},
// otherwise redirect to home
{ path: '**', redirectTo: '/home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
