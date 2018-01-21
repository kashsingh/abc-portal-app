import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { AuthGuard } from './shared/_guards/auth.guard';
import { LoginComponent } from './shared/login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: '', redirectTo: 'admin', pathMatch: 'full', canActivate: [AuthGuard] 
  },
  {
    path: 'admin',
    loadChildren: './pages/admin-page/admin-page.module#AdminPageModule',
    canActivate: [AuthGuard]
  },
  {
      path: 'student',
      loadChildren: 'app/pages/student-page/student-page.module#StudentPageModule',
      canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent 
  }
 ];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
