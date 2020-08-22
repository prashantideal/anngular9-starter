import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnonymousUserLayoutComponent } from './common/anonymous-user-layout/anonymous-user-layout.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { AuthorizedUserLayoutComponent } from './common/authorized-user-layout/authorized-user-layout.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './main/home/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/app/home', pathMatch: 'full'},
  {path: 'login',
   component: AnonymousUserLayoutComponent,
   children: [
    { path: '', component: SignInComponent }
   ]
  },
  {
    path: 'app',
    component: AuthorizedUserLayoutComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {path: 'home', component: HomeComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
