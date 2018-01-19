import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { 
    path: '', redirectTo: 'admin', pathMatch: 'full' 
  },
  {
    path: 'admin',
    loadChildren: './pages/admin-page/admin-page.module#AdminPageModule'
  },
  {
      path: 'student',
      loadChildren: 'app/pages/student-page/student-page.module#StudentPageModule'
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
