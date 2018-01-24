import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { AuthGuard } from './shared/_guards/auth.guard';
import { LoginComponent } from './shared/login/login.component';
import { LoginLayoutComponent } from './shared/login/login-layout.component';
import { AppLayoutComponent } from './shared/ui/layout/layout.component';

const appRoutes: Routes = [
  {
    path: '',                   
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full'}, 
      { path: 'admin', loadChildren: './pages/admin-page/admin-page.module#AdminPageModule' },
      { path: 'student', loadChildren: 'app/pages/student-page/student-page.module#StudentPageModule' },
    ]
  },
  {
    path: '',                   
    component: LoginLayoutComponent,     
    children: [
      { path: 'login', component: LoginComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
]
  

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
