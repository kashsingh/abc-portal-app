import { NgModule } from '@angular/core';
import { AdminPageRoutingModule } from "./admin-page.routing";

import { ManageCourseComponent } from './manage-course/manage-course.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { ReportsComponent } from './reports/reports.component';
import { SubjectCreateComponent } from './manage-course/subject-create/subject-create.component';
import { ViewSubjectsComponent } from './manage-course/view-subjects/view-subjects.component';
import { SubjectDeleteComponent } from './manage-course/subject-delete/subject-delete.component';
import { SubjectUpdateComponent } from './manage-course/subject-update/subject-update.component';
import { StudentCreateComponent } from './manage-student/student-create/student-create.component';
import { ViewStudentComponent } from './manage-student/view-student/view-student.component';
import { StudentUpdateComponent } from './manage-student/student-update/student-update.component';
import { StudentMarksUpdateComponent } from './manage-student/student-marks-update/student-marks-update.component';
import { StudentDeleteComponent } from './manage-student/student-delete/student-delete.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

@NgModule({
  imports: [
    AdminPageRoutingModule
  ],
  exports: [
  ],
  declarations: [
    ManageCourseComponent, 
    ManageStudentComponent, 
    ReportsComponent, 
    SubjectCreateComponent, 
    ViewSubjectsComponent, 
    SubjectDeleteComponent, 
    SubjectUpdateComponent, 
    StudentCreateComponent, 
    ViewStudentComponent, 
    StudentUpdateComponent, 
    StudentMarksUpdateComponent, 
    StudentDeleteComponent,
    AdminMenuComponent
  ]
})
export class AdminPageModule { }
