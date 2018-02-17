import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { StudentPageRoutingModule } from './student-page.routing';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EnrollSemesterComponent } from './enroll-semester/enroll-semester.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewResultComponent } from './view-result/view-result.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from '../../shared/_guards/jwt.interceptor';
import { AuthenticationService } from '../../shared/_services';
import { StudentService } from "./student.service";
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularMultiSelectModule,
    StudentPageRoutingModule,
    ClarityModule.forChild(),
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    EnrollSemesterComponent,
    ViewResultComponent,
    StudentMenuComponent
  ],

  providers: [
    StudentService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]

})
export class StudentPageModule { }
