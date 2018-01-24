import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPageRoutingModule } from './student-page.routing';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EnrollSemesterComponent } from './enroll-semester/enroll-semester.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewResultComponent } from './view-result/view-result.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { ChangePasswordComponent } from './change-password/change-password.component'

@NgModule({
  imports: [
    CommonModule,
    StudentPageRoutingModule
  ],
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    EnrollSemesterComponent,
    ViewResultComponent,
    StudentMenuComponent,
    ChangePasswordComponent
  ],
  exports: [
  ]
})
export class StudentPageModule { }
