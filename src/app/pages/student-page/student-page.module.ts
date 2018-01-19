import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPageRoutingModule } from './student-page.routing';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EnrollSemesterComponent } from './enroll-semester/enroll-semester.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewResultComponent } from './view-result/view-result.component';
import { StudentMenuComponent } from './student-menu/student-menu.component'

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
    StudentMenuComponent
  ],
  exports: [
  ]
})
export class StudentPageModule { }
